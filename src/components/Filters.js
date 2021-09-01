import {React, useState, useEffect} from 'react';

const Filters = ({projects, onChange}) => {

    const [criteria, setCriteria] = useState({opensourced: false, project: ''});

    useEffect(() => {
        onChange(criteria);
    }, [criteria]);

    function onlyOpenSourced() {
        const value = !criteria.opensourced
        setCriteria({project: value ? '' : criteria.project, opensourced: value})
    }

    function chooseProject(e) {
        setCriteria({...criteria, project: e.target.value})
    }

    return (
        <div className="Filters flex gap-3 flex-wrap">
            <fieldset disabled={criteria.opensourced}>
                <div className="flex items-center">
                    <label className="mr-2" htmlFor="menu">Menu</label>
                    <select id="menu" onChange={chooseProject} value={criteria.project} className="w-32">
                        <option value="" selected>All</option>
                        {projects.map((p, i) => <option value={p.name}>{p.name}</option>)}
                    </select>
                </div>
            </fieldset>


            <div className="flex">
                <label className="flex items-center">
                    <label className="mr-2" htmlFor="opensourced">Open sourced</label>
                    <input type="checkbox" className="form-checkbox w-4 h-4" id="opensourced"
                           onChange={onlyOpenSourced} checked={criteria.opensourced}/>
                </label>
            </div>
        </div>
    );
};

export default Filters;
