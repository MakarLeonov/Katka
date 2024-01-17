<?php

namespace App\Http\Controllers;

use App\Platform;
use Illuminate\Http\Request;
use App\Http\Resources\PlatformResource;
use App\Http\Requests\PlatformRequest;

class PlatformController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PlatformResource::collection(Platform::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PlatformRequest $request)
    {
        $created_platform = Platform::create($request->validated());

        return new PlatformResource($created_platform);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new PlatformResource(Platform::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PlatformRequest $request, string $id)
    {
        $entry = Platform::findOrFail($id);
        $entry->update($request->validated());
        return new PlatformResource($entry);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $id)
    {
        Platform::destroy($id);
        return 'Запись успешно удалена!';
    }
}
