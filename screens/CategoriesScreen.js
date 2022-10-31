import {FlatList} from "react-native";
import {CATEGORIES} from "../data/fakeData";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen() {

    function renderCategoryItem(data) {
        return <CategoryGridTile title={data.item.title}
                                 color={data.item.color}
                                 id={data.item.id}
        />
    }

    return <>
        <FlatList data={CATEGORIES}
                  keyExtractor={o => o.id}
                  renderItem={renderCategoryItem}
                  numColumns={2}
        />
    </>

}

export default CategoriesScreen