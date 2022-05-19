<?php

namespace App\Services\Bouquet;

use App\Models\Bouquet;
use App\Models\Category;
use App\Models\Flower;
use App\Services\Image\ImageService;

class BouquetService
{

  private $bouquet;

  private $imageService;

  public function __construct(Bouquet $bouquet, ImageService $imageService)
  {
    $this->bouquet = $bouquet;
    $this->imageService = $imageService;
  }

  public function create($request): void
  {
    $this->bouquet->fill($request->all());
    $this->bouquet->image = $this->imageService->saveImage('images/bouquets/', $request->file('image'));
    $this->bouquet->save();

    $this->bindCategories(explode(",", $request->input("categories")));

    $this->bindFlowers(explode(",", $request->input("flowers")));
  }

  public function update($request): void
  {
    $this->bouquet = Bouquet::where('id', $request->input('id'))->first();
    $this->bouquet->fill($request->all());
    $request->file('image') && $this->bouquet->image = $this->imageService->saveImage('images/bouquets/', $request->file('image'));
    $this->bouquet->save();

    $this->bindCategories(explode(",", $request->input("categories")));

    $this->bindFlowers(explode(",", $request->input("flowers")));
  }

  public function bindCategories(array $categoriesIds): void
  {
    $this->bouquet->categories()->detach();
    $categories = Category::whereIn('id', $categoriesIds)->get();
    $this->bouquet->categories()->saveMany($categories);
  }

  public function bindFlowers(array $flowersIds): void
  {
    $this->bouquet->flowers()->detach();
    $flowers = Flower::whereIn('id', $flowersIds)->get();
    $this->bouquet->flowers()->saveMany($flowers);
  }
}
