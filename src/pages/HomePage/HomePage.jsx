import React,{useEffect} from "react";
import "./HomePage.scss";
import Sidebar from "../../components/Slider/HeaderSlider";
import {useSelector,useDispatch} from "react-redux";
import {getAllCategories} from "../../store/categorySlice";
import ProductList from "../../components/ProductList/ProductList";
import {fetchAsyncProducts, getAllProducts, getAllProductsStatus} from "../../store/productSlice";
import Loader from "../../components/Loader/Loader";
import {STATUS} from "../../utils/status";
const HomePage = () =>{
    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);

    useEffect(()=>{
        console.log("Dispatching fetchAsyncProducts");
        dispatch(fetchAsyncProducts(20))
    },[]);
    const products = useSelector(getAllProducts);
    console.log(products);
    const productStatus = useSelector(getAllProductsStatus);

    // random sản phẩm
    const tempProducts = []
    if (products.length>0){
        for (let i in products){
            let randomIndex = Math.floor((Math.random()*products.length));
            while (tempProducts.includes(products[randomIndex])){
                randomIndex = Math.floor(Math.random()*products.length);
            }
            tempProducts[i] = products[randomIndex];

        }
    }
    return (
        <main>
            <div className='slider-wrapper'>
               < Sidebar/>
            </div>
            <div className='main-content bg-whitesmoke'>
                <div className='container'>
                    <div className='categories py-5'>
                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>Sản phẩm mới nhất</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader/> : <ProductList products={tempProducts}/>}
                        </div>
                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>Đề Xuất</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader/> : <ProductList products={tempProducts}/>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default HomePage;