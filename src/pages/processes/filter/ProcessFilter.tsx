import React, { useState } from 'react';
import Select from './components/select';
import Filter from './mainFilter';



const ProcessFilter:any = (props) => { 
    
    return (
        <div>
        <div className="mt-5 mb-3">
            Process
        </div>
        <div >
            <div className="mb-2">
            <label className="font-normal text-xs mb-1">Name</label>
            </div>
            <Select options={props.FilteredSetup.Name} className="relative bg-neutral-700 mb-5" classNameoptions="text-gray-300 bg-neutral-700 text-xs"/>
            <div className="mb-2">
            <label className="font-normal text-xs text-neutral-500">Version</label>
            </div>
            <Select options={props.FilteredSetup.Version} className="relative bg-neutral-700 mb-5" classNameoptions="text-gray-300 bg-neutral-700 text-xs"/>
            <div className="mb-2">
            <label className="font-normal text-xs text-neutral-500">Flow Node</label>
            </div>
            <Select options={props.FilteredSetup.Flownode} className="relative bg-neutral-700 mb-5" classNameoptions="text-gray-300 bg-neutral-700 text-xs"/>
        </div>
        </div>
    );
};

export default ProcessFilter;