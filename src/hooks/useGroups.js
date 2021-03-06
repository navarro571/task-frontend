import React, { useState, useEffect } from "react";

const BASE_URL = "https://taskmanagerpj.herokuapp.com/api/v1";

const useGroups = (key) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        updateState();
        const interval = setInterval(() => updateState(), 5000);
        return () => clearInterval(interval);
    }, []);

    const find = id => state.find(group => group.id == id);

    const create = async (data) => {
        const res = await fetch(BASE_URL + "/taskgroups/?key="+key, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ name: data.name })
        }).then(res => res.json());
        updateState();
        return res;
    }
    const update = async (id, data) => {
        const res = await fetch(BASE_URL + "/taskgroups/?key="+key+"&id="+id, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            body: { name: data.name },
        }).then(res => res.json());
        updateState();
        return res;
    }
    const remove = async (id) => {
        await fetch(BASE_URL + "/taskgroups/?key="+key+"&id=" + id, { method: 'DELETE' }).then(res => res.json());
        updateState();
    }
    const updateState = async () => {
        console.log("Updating groups");
        const res = await fetch(BASE_URL + "/taskgroups/?key=" + key, { method: 'GET' }).then(res => res.json());
        setState(res);
    }
    return {
        state,
        find,
        create,
        update,
        remove
    }
}

export default useGroups;