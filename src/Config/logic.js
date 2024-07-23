export const isPresentInFavorites =(favorites,artwork) =>{
    for(let item of favorites){
        if(artwork.id === item.id){
            return true
        }
    }
    return false;
}