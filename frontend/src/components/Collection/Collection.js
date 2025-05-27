import React, { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Collection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IMGBANNERS, BLOGCONTENTS } from "../../../../constants/index.js";
import ProductCard from "../../../components/ProductCard/ProductCard.jsx";

function Collection({ categories }) {
    const [cate1, setCate1] = useState([]);
    const [cate2, setCate2] = useState([]);
    const [cate3, setCate3] = useState([]);
    const [cate4, setCate4] = useState([]);

    useEffect(() => {
        if (categories) {
            setCate1(categories[0]);
            setCate2(categories[1]);
            setCate3(categories[2]);
            setCate4(categories[3]);
        }
    }, [categories]);

    const cate1Ref = useRef(null);
    const cate2Ref = useRef(null);
    const cate3Ref = useRef(null);
    const cate4Ref = useRef(null);

    const scrollToCategory = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="collection-container">
            {/* Hiển thị từng danh mục sách */}
            {[cate1, cate2, cate3, cate4].map((cate, index) => (
                <div key={index}>
                    <div className="div__title" ref={[cate1Ref, cate2Ref, cate3Ref, cate4Ref][index]}>
                        <h2 className="title-accessory">{cate?.categoryName}</h2>
                    </div>
                    <div className="div__lists">
                        <div className="div__lists-books">
                            <div className="lists-books">
                                {cate?.products?.map((product, idx) => (
                                    <ProductCard key={idx} product={product} />
                                ))}
                            </div>
                            <Link
                                className="button__seeMore"
                                to={`/categories/${cate?.categoryName}`}
                            >
                                Xem thêm sách <b className="bold-text">{cate?.categoryName}</b>
                            </Link>
                        </div>
                    </div>

                    {/* Hiển thị banner giữa cate2 và cate3 */}
                    {(index === 1 || index === 2) && (
                        <div className="div__banners">
                            <div className="banners">
                                <img
                                    src={IMGBANNERS.imgID1}
                                    className="img-banners"
                                    alt="banner sách"
                                />
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* BLOG */}
            <div className="blogs">
                <div className="div-title">
                    <h4 className="blog-title">Có thể bạn muốn đọc</h4>
                </div>
                <div className="div__list-blogs">
                    <ul className="list-blogs">
                        {Array(9).fill(null).map((_, idx) => (
                            <li className="blog-contents" key={idx}>
                                <img
                                    className="blog-imgs"
                                    src={BLOGCONTENTS.imgs}
                                    alt="blog sách"
                                />
                                <div className="img__blog-content">
                                    <h5>
                                        <a className="blog-dct" href="/detail-blogs">
                                            {BLOGCONTENTS.description}
                                        </a>
                                    </h5>
                                    <p className="blog-date">{BLOGCONTENTS.date}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="div__button">
                        <Button variant="outline-dark" className="button-seeMore">
                            Xem thêm <i className="fa-solid fa-arrow-right"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
