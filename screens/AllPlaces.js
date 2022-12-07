import PlacesList from "../components/Places/PlacesList";
import {useEffect, useState} from "react";
import {useIsFocused, useRoute} from "@react-navigation/native";
import {fetchPlaces} from "../util/database";

export default function AllPlaces() {
    const [loadedPlaces, setLoadedPlaces] = useState([])
    const isFocused = useIsFocused()

    useEffect(() => {
        async function loadPlaces() {
            const places = await fetchPlaces()
            setLoadedPlaces(places)
        }

        if (isFocused) {
            loadPlaces()
        }

    }, [isFocused])
    return <>
        <PlacesList places={loadedPlaces}/>
    </>
}