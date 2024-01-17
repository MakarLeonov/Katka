<?php

namespace App\Http\Controllers;

use App\ProductKey;
use Illuminate\Http\Request;
use App\Http\Resources\ProductKeyResource;
use App\Http\Requests\ProductKeyRequest;

class ProductKeyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProductKeyResource::collection(ProductKey::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductKeyRequest $request)
    {
        $created_ProductKey = ProductKey::create($request->validated());

        return new ProductKeyResource($created_ProductKey);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ProductKeyResource(ProductKey::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductKeyRequest $request, string $id)
    {
        $entry = ProductKey::findOrFail($id);
        $entry->update($request->validated());
        return new ProductKeyResource($entry);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $id)
    {
        ProductKey::destroy($id);
        return 'Запись успешно удалена!';
    }
}
