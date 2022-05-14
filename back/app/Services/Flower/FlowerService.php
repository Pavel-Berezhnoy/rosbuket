<?php

namespace App\Services\Flower;

use App\Models\Flower;
use App\Services\Image\ImageService;

class FlowerService
{

  private $flower;

  private $imageService;

  public function __construct(Flower $flower, ImageService $imageService)
  {
    $this->flower = $flower;
    $this->imageService = $imageService;
  }

  public function create($request): void
  {
    $this->flower->fill($request->all());
    $this->flower->image = $this->imageService->saveImage('images/flowers/', $request->file('image'));
    $this->flower->save();
  }

  public function delete(int $id): void
  {
    $this->flower = Flower::where('id', $id)->first();
    $this->flower->flowersBouquets()->delete();
    $this->flower->delete();
  }

  public function update($request): void
  {
    $this->flower = Flower::where('id', $request->input('id'))->first();
    $this->flower->fill($request->all());
    $request->file('image') ? $this->flower->image = $this->imageService->saveImage('images/flowers/', $request->file('image')) : '';
    $this->flower->save();
  }

}
