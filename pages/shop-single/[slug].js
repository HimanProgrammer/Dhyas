import React, {Fragment, useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import { connect } from "react-redux";
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import ProductTabs from './alltab';
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo-2.svg';


const ProductSinglePage =(props) => {

    const router = useRouter()

    const productsArray = api();
    const Allproduct = productsArray

    const { addToCart } = props;

    const initialProducts = Allproduct.filter(prod => prod.slug === router.query.slug);
    const [product, setProduct] = useState(initialProducts);

    useEffect(() => {
        setProduct(Allproduct.filter(prod => prod.slug === router.query.slug));
      }, [Allproduct, router.query.slug]);

    const item = product[0];

    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Product Single'} /> 
            <section className="shop-single-section section-padding">
                <div className="container">
                    {item ? <Product
                        item={item}
                        addToCart={addToCart}
                    /> : null}
                    <ProductTabs/>
                </div>
            </section>
            <Footer />
            <Scrollbar/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);