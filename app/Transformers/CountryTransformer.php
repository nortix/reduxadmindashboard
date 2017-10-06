<?php
namespace App\Transformers;

use App\Country;
use League\Fractal\TransformerAbstract;

class CountryTransformer extends TransformerAbstract
{

    /**
     * Transforms the Model object to a associative array
     * This decouples DB columns from API response structure
     * 
     * @param Model $model
     * @return array
     */
    public function transform(Country $model)
    {

        return [
            'id' => (int) $model->id,
            'name' => $model->name,
            'code' => $model->code
        ];
    }
}
