'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ProductCard } from '@/ui/Card';
import { BreadcrumbHeader } from '@/ui/Breadcrumb';
import { Button } from '@/ui/Button';

const RELATED_PRODUCTS_DATA = [
    {
        id: 162,
        title: 'Grey Sport Set',
        productUrl: '/multikart-frontend/product/grey-sport-set',
        images: ['https://code.pixelstrap.net/multikart/storage/1069/Sport_32.jpg'],
        brandName: 'EnduraFit',
        brandUrl: '/multikart-frontend/brand/endurafit',
        price: '₹1,045.80',
        originalPrice: '₹1,162.00',
        discount: '10% Off',
        rating: '0',
        ribbonText: 'Trending',
        offers: ['Limited Time Offer: 10% off']
    },
    {
        id: 158,
        title: 'Fitted Coords Set (Green)',
        productUrl: '/multikart-frontend/product/fitted-coords-set-2',
        images: [
            'https://code.pixelstrap.net/multikart/storage/987/Sport_1021.jpg',
            'https://code.pixelstrap.net/multikart/storage/984/Sport_1011.jpg'
        ],
        brandName: 'Thrive Athletica',
        brandUrl: '/multikart-frontend/brand/thrive-athletica',
        price: '₹946.20',
        originalPrice: '₹996.00',
        discount: '5% Off',
        rating: '0',
        ribbonText: 'Trending',
        offers: ['Limited Time Offer: 5% off']
    },
    {
        id: 155,
        title: 'Athleisure Set',
        productUrl: '/multikart-frontend/product/athleisure-set',
        images: ['https://code.pixelstrap.net/multikart/storage/940/Sport_11.jpg'],
        brandName: 'Thrive Athletica',
        brandUrl: '/multikart-frontend/brand/thrive-athletica',
        price: '₹1,419.30',
        originalPrice: '₹1,494.00',
        discount: '5% Off',
        rating: '0',
        ribbonText: 'Trending',
        offers: ['Limited Time Offer: 5% off']
    },
    {
        id: 151,
        title: 'Sport Set (Green/S)',
        productUrl: '/multikart-frontend/product/sport-set',
        images: ['https://code.pixelstrap.net/multikart/storage/884/Sport_913.jpg'],
        brandName: 'EnduraFit',
        brandUrl: '/multikart-frontend/brand/endurafit',
        price: '₹747.00',
        originalPrice: '₹830.00',
        discount: '10% Off',
        rating: '0',
        ribbonText: 'Featured',
        offers: ['Limited Time Offer: 10% off']
    }
];

const PRODUCT_VARIANTS = [
    {
        label: 'Option 1',
        images: [
            'https://code.pixelstrap.net/multikart/storage/919/Sport_1123.jpg',
            'https://code.pixelstrap.net/multikart/storage/918/Sport_1122.jpg',
            'https://code.pixelstrap.net/multikart/storage/917/Sport_1121.jpg'
        ]
    },
    {
        label: 'Option 2',
        images: [
            'https://code.pixelstrap.net/multikart/storage/927/Sport_1133.jpg',
            'https://code.pixelstrap.net/multikart/storage/928/Sport_1111.jpg',
            'https://code.pixelstrap.net/multikart/storage/929/Sport_1112.jpg'
        ]
    },
    {
        label: 'Option 3',
        images: [
            'https://code.pixelstrap.net/multikart/storage/930/Sport_1113.jpg',
            'https://code.pixelstrap.net/multikart/storage/929/Sport_1112.jpg',
            'https://code.pixelstrap.net/multikart/storage/928/Sport_1111.jpg'
        ]
    }
];

export default function ProductDetailPage() {
    const params = useParams();
    const slug = params?.slug;

    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<'description' | 'review' | 'questions_answers'>('description');
    const imagesList = PRODUCT_VARIANTS[selectedVariantIndex].images;
    const selectedImage = imagesList[activeImageIndex] ?? imagesList[0];

    const handleDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="product-page-container">
            <BreadcrumbHeader title="Gym Coords Set" />

            {/* Main Product Section */}
            <section className="collection-wrapper py-5">
                <div className="container mx-auto px-4">
                    <div className="row g-sm-4 g-3 grid grid-cols-1 lg:grid-cols-12 gap-6">

                        <div className="col-xl-4 lg:col-span-4">
                            <div className="thumbnail-image-slider">
                                <div className="row g-sm-4 g-3">
                                    <div className="col-12">
                                        <div className="product-slick position-relativ ">
                                            <ul className="product-detail-label">
                                                <li className="product-detail-label-li featured  text-xs px-2 py-1 uppercase font-bold">Featured</li>
                                            </ul>
                                            <div className="image-zoom-container relative h-[450px] overflow-hidden">
                                                <Image fill priority sizes="(max-width: 768px) 100vw, 40vw" src={selectedImage} alt="Gym Coords Set" className="object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="slider-nav flex gap-3 mt-3">
                                            {imagesList.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    aria-label={`Show ${PRODUCT_VARIANTS[selectedVariantIndex].label} image ${idx + 1}`}
                                                    aria-pressed={activeImageIndex === idx}
                                                    className={`slider-image relative h-24 w-20 shrink-0 cursor-pointer overflow-hidden rounded ${activeImageIndex === idx ? 'ring-2 ring-primary-500' : 'opacity-70 hover:opacity-100'}`}
                                                    onClick={() => setActiveImageIndex(idx)}
                                                >
                                                    <Image fill sizes="80px" className="object-cover" src={img} alt="" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 lg:col-span-4 product-right product-description-box product-page-details">
                            <div className="trending-text flex items-center gap-2 mb-2 text-sm text-orange-600 mt-5">
                                <img
                                    src="	https://angular.pixelstrap.com/multikart-frontend/assets/images/trending.gif"
                                    alt=" "
                                    width={24}
                                    height={24}
                                    className="img-fluid"
                                />                                <h5>Selling fast! 3 people have this in their carts.</h5>
                            </div>
                            <h2 className="main-title text-2xl font-bold text-gray-900 mb-2">Gym Coords Set (Blue)</h2>

                            <div className="product-rating flex items-center gap-2 text-yellow-500 mb-3">
                                <div className="rating-list flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="text-yellow-400"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="divider text-gray-300">|</span>
                                <a href="javascript:void(0)" className="text-gray-600 text-sm">0 Review</a>
                            </div>

                            <div className="price-text mb-4">
                                <h3 className="text-xl font-bold text-gray-900">
                                    <span className="text-dark fw-normal text-sm font-normal text-gray-500 mr-2">MRP:</span>
                                    ₹1,411.00
                                </h3>
                                <span className="text-xs text-gray-400">Inclusive all the text</span>
                            </div>

                            <p className="description-text text-gray-600 text-sm mb-4">
                                "Gym Coords Set" offers a complete workout ensemble for the modern fitness enthusiast. This coordinated set includes everything needed for a stylish and functional gym session...
                            </p>

                            <div className="size-delivery-info flex items-center gap-4 py-3 border-t border-dashed border-gray-300 mb-4 text-sm">
                                <a href="javascript:void(0)" className="flex items-center gap-1 text-gray-700 hover:text-orange-600"><i className="ri-truck-line"></i> Delivery & Return</a>
                                <a href="javascript:void(0)" className="flex items-center gap-1 text-gray-700 hover:text-orange-600"><i className="ri-questionnaire-line"></i> Ask A Question</a>
                            </div>

                            <div className="bordered-box border-t border-dashed border-gray-300 p-4 mb-4">
                                <h4 className="sub-title font-semibold mb-2 text-gray-800">Product Info</h4>
                                <ul className="shipping-info text-sm space-y-1 text-gray-600 grid grid-cols-2">
                                    <li><span>SKU: </span>SP18 (COPY)</li>
                                    <li><span>Unit: </span>1 Item</li>
                                    <li><span>Weight: </span>150 Gms</li>
                                    <li><span>Stock: </span>In stock</li>
                                    <li className="col-span-2"><span>Quantity Left: </span>40 Items</li>
                                </ul>
                            </div>

                            <div className="bordered-box  border-t  border-dashed border-gray-300 p-4 mb-4">
                                <h4 className="sub-title font-semibold mb-2 text-gray-800">Delivery Details</h4>
                                <ul className="product-offer text-sm space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2"><i className="ri-truck-line text-orange-500"></i> Your order is likely to reach you within 7 days.</li>
                                    <li className="flex items-center gap-2"><i className="ri-arrow-left-right-line text-orange-500"></i> Hassle free returns within 7 Days.</li>
                                </ul>
                            </div>

                            <div className="dashed-border-box border  border-dashed border-gray-300 p-4">
                                <h4 className="sub-title font-semibold mb-2 up-title text-gray-800">Guaranteed Safe Checkout</h4>
                                <img alt="img" className="img-fluid mt-2" src="https://code.pixelstrap.net/multikart/storage/3835/payments.png" />
                            </div>
                        </div>

                        <div className="col-xl-4 lg:col-span-4    p-4    ">
                            <div className='product-right product-form-box product-page-details'>


                                <span>

                                </span>
                                <div className="variation-box mb-4">
                                    <h4 className="sub-title font-semibold mb-2 text-gray-800">Colour:</h4>
                                    <ul className="flex gap-3 justify-center">
                                        {PRODUCT_VARIANTS.map((variant, index) => (
                                            <li key={variant.label} className="list-none">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedVariantIndex(index);
                                                        setActiveImageIndex(0);
                                                    }}
                                                    aria-label={`Select ${variant.label}`}
                                                    aria-pressed={selectedVariantIndex === index}
                                                    className={`relative h-14 w-12 overflow-hidden rounded ${selectedVariantIndex === index ? 'ring-2 ring-primary-500 ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
                                                >
                                                    <Image fill sizes="48px" src={variant.images[0]} alt="" className="object-cover" />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="product-buttons space-y-4">
                                    <div className="qty-section">
                                        <p className="mb-2 text-sm font-medium text-gray-700">Quantity</p>
                                        <div className="qty-box">
                                            <div role="group" aria-label="Quantity selector" className="input-group inline-flex items-center gap-1 rounded-md bg-gray-100 p-1">
                                                <button
                                                    type="button"
                                                    onClick={handleDecrement}
                                                    disabled={quantity <= 1}
                                                    aria-label="Decrease quantity"
                                                    className="grid h-9 w-9 place-items-center rounded text-gray-700 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                                                >
                                                    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                                        <path d="M5 12h14" />
                                                    </svg>
                                                </button>
                                                <output aria-live="polite" className="min-w-10 text-center text-sm font-semibold tabular-nums text-gray-900">
                                                    {quantity}
                                                </output>
                                                <button
                                                    type="button"
                                                    onClick={handleIncrement}
                                                    aria-label="Increase quantity"
                                                    className="grid h-9 w-9 place-items-center rounded text-gray-700 transition-colors hover:bg-white"
                                                >
                                                    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                                        <path d="M12 5v14M5 12h14" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-buy-btn-group flex  justify-center gap-2">
                                        <Button>
                                            <span className="ring-animation mx-2" aria-hidden="true">
                                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6" />
                                                    <circle cx="10" cy="21" r="1" />
                                                    <circle cx="19" cy="21" r="1" />
                                                </svg>
                                            </span>
                                            Add To Cart
                                        </Button>
                                        <Button>
                                            Buy Now
                                        </Button>
                                    </div>
                                </div>

                                <div className="buy-box compare-box flex justify-between mt-6 pt-4 border-t border-gray-200 text-sm text-gray-600">
                                    <a href="javascript:void(0)" className="flex items-center gap-1 hover:text-orange-600"><i className="ri-heart-line"></i> Wishlist</a>
                                    <a href="javascript:void(0)" className="flex items-center gap-1 hover:text-orange-600"><i className="ri-refresh-line"></i> Compare</a>
                                    <a href="javascript:void(0)" className="flex items-center gap-1 hover:text-orange-600"><i className="ri-share-line"></i> Share</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="tab-product product-details-contain section-b-space py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white border border-gray-200 p-6">
                        <ul className="nav nav-tabs nav-material flex border-b border-gray-200 mb-4 gap-6">
                            <li className={`pb-2 cursor-pointer ${activeTab === 'description' ? 'border-b-2 border-orange-500 text-orange-600 font-semibold' : 'text-gray-600'}`} onClick={() => setActiveTab('description')}>
                                Description
                            </li>
                            <li className={`pb-2 cursor-pointer ${activeTab === 'review' ? 'border-b-2 border-orange-500 text-orange-600 font-semibold' : 'text-gray-600'}`} onClick={() => setActiveTab('review')}>
                                Review
                            </li>
                            <li className={`pb-2 cursor-pointer ${activeTab === 'questions_answers' ? 'border-b-2 border-orange-500 text-orange-600 font-semibold' : 'text-gray-600'}`} onClick={() => setActiveTab('questions_answers')}>
                                Q&A
                            </li>
                        </ul>

                        <div className="tab-content nav-material">
                            {activeTab === 'description' && (
                                <div className="product-tab-description text-gray-600 text-sm leading-relaxed space-y-4">
                                    <p>"Gym Coords Set" offers a comprehensive solution for those seeking comfort and style in their workout attire. Crafted from high-quality, breathable fabrics, each piece ensures optimal performance.</p>
                                    <p>Whether you're hitting the treadmill or attending a yoga class, the Gym Coords Set has you covered in both style and functionality.</p>
                                </div>
                            )}
                            {activeTab === 'review' && (
                                <div className="text-gray-600 text-sm">No reviews yet for this product. Be the first to review!</div>
                            )}
                            {activeTab === 'questions_answers' && (
                                <div className="text-gray-600 text-sm">Have a question? Feel free to ask us using the question link above.</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products Section */}
            <section className="section-b-space ratio_asos pt-0 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="row mb-6">
                        <div className="col-12 product-related">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-wide mt-5">
                                Related Products
                            </h2>
                        </div>
                    </div>

                    <div className="row grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5 gap-4 sm:gap-6">
                        {RELATED_PRODUCTS_DATA.map((product) => (
                            <div key={product.id} className="col">
                                <ProductCard
                                    productUrl={product.productUrl}
                                    images={product.images}
                                    title={product.title}
                                    brandName={product.brandName}
                                    brandUrl={product.brandUrl}
                                    price={product.price}
                                    originalPrice={product.originalPrice}
                                    discount={product.discount}
                                    rating={product.rating}
                                    ribbonText={product.ribbonText}
                                    offers={product.offers}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}