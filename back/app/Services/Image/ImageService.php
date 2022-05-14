<?php

namespace App\Services\Image;

use Illuminate\Support\Str;

class ImageService
{

  public function saveImage(string $destination, $image): string
  {
    $filename = (string)Str::uuid() . "." . $image->getClientOriginalExtension();
    $image->move($destination, $filename);
    return '/' . $destination . $filename;
  }
}
