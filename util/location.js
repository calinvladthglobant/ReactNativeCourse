const GOOGLE_API_KEY = 'AIzaSyAKDVaANH7fssXOXYpLZQaNHyymf03FDvk'


export function getMapPreview(lat, lng) {
    const link = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`
    console.log(link)
    return link
}


export async function getAddress(lat, lng) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Failed to fetch address!')
    }

    const data = await response.json()
    return data.results[0].formatted_address
}