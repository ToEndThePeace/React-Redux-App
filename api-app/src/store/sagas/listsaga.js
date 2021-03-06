import { take, call, put } from "redux-saga/effects";
import axios from "axios";

import { APP_LOADED, appLoadSuccess, setCount } from "../actions/pokemonList";

export async function getCount() {
    try {
        const {
            data: { count },
        } = await axios.get("https://pokeapi.co/api/v2/pokemon");
        return count;
    } catch (e) {
        return 807;
    }
}

export async function loadPokeList(count) {
    var url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${count}`;
    try {
        const {
            data: { results: list },
        } = await axios.get(url);
        return list;
    } catch (e) {
        console.log(e);
    }
}

export async function loadPokeDetails(list) {
    var res = null;
    while (!res) {
        try {
            const req = await Promise.all(
                list.map((x) => {
                    return axios.get(x.url);
                })
            );
            let response = {};
            req.forEach((x) => {
                response[x.data.id] = {
                    abilities: x.data.abilities,
                    height: x.data.height,
                    id: x.data.id,
                    name: x.data.name,
                    sprites: x.data.sprites,
                    stats: x.data.stats,
                    types: x.data.types,
                    weight: x.data.weight,
                    isFavorite: false,
                };
            });
            return response;
        } catch (e) {
            console.log("FETCH FAILED, TRYING AGAIN!");
        }
    }
    return res;
}

export function* appStartWatcher() {
    while (true) {
        yield take(APP_LOADED);
        var count = yield call(getCount);
        const list = yield call(loadPokeList, count);
        const res = yield call(loadPokeDetails, list);
        yield put(appLoadSuccess(res));
        yield put(setCount(count));
    }
}
