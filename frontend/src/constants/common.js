import { createContext, useEffect, useState } from "react";
import categoryApi from "../api/categoryApi";

export const BASEURLHOST = "https://api.ezfrontend.com";
export const THUMBNAIL_PLACEHOLDER =
    "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";
export const IMGBANNERS = {
    imgID1:
        "https://theme.hstatic.net/200000454999/1000825052/14/home_collection_2_image.jpg?v=366",
    imgID2:
        "https://theme.hstatic.net/200000454999/1000825052/14/home_collection_4_image.jpg?v=366",
    imgID3:
        "https://theme.hstatic.net/200000454999/1000825052/14/home_collection_6_image.jpg?v=366",
};

export const BLOGCONTENTS = {
    id: 1,
    imgs: "https://file.hstatic.net/200000454999/article/snapedit_1706866990105_efc0d2d565d24f54b57cf1bf865f897f_small.png",
    description: "6 điểm mới sắp có trên iOS 17.4",
    date: "13/05/2024",
};

export const CategoryContext = createContext();

// Tạo Provider
export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getProucts();
                // console.log("cateee", list);
                setCategories(list);
            } catch (error) {
                console.log("Failed to fetch category list", error);
            }
        })();
    }, []);
    return (
        <CategoryContext.Provider value={categories}>
            {props.children}
        </CategoryContext.Provider>
    );
};
