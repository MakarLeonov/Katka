<?php

namespace App\Http\Controllers;

use App\XboxSubscription;
use Illuminate\Http\Request;
use App\Http\Resources\XboxSubscriptionResource;
use App\Http\Requests\XboxSubscriptionRequest;

class XboxSubscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return XboxSubscriptionResource::collection(XboxSubscription::with('platform')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(XboxSubscriptionRequest $request)
    {
        $created_entry = XboxSubscription::create($request->validated());

        return new XboxSubscriptionResource($created_entry);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new XboxSubscriptionResource(XboxSubscription::with('platform')->findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(XboxSubscriptionRequest $request, string $id)
    {
        $entry = XboxSubscription::findOrFail($id);
        $entry->update($request->validated());
        return new XboxSubscriptionResource($entry);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $id)
    {
        XboxSubscription::destroy($id);
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
        return XboxSubscriptionResource::collection(XboxSubscription::where('name', 'like', '%'.$name.'%')->get());
    }
}
