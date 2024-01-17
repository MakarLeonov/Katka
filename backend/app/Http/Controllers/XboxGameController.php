<?php

namespace App\Http\Controllers;

use App\XboxGame;
use Illuminate\Http\Request;
use App\Http\Resources\XboxGameResource;
use App\Http\Requests\XboxGameRequest;

class XboxGameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return XboxGameResource::collection(XboxGame::with('platform')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(XboxGameRequest $request)
    {
        $created_entry = XboxGame::create($request->validated());

        return new XboxGameResource($created_entry);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new XboxGameResource(XboxGame::with('platform')->findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(XboxGameRequest $request, string $id)
    {
        $entry = XboxGame::findOrFail($id);
        $entry->update($request->validated());
        return new XboxGameResource($entry);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $id)
    {
        XboxGame::destroy($id);
        return 'Запись успешно удалена!';
    }

    /**
     * Search for a name
     *
     * @param  str $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return XboxGameResource::collection(XboxGame::where('name', 'like', '%'.$name.'%')->get());
    }
}
