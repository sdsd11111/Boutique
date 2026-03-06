"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Sun, BatteryCharging, ShieldCheck, X, MessageCircle, ArrowRight, Gauge, Activity, Clock, MapPin, Plus, Heart } from 'lucide-react';

interface Product {
    id: number;
    category: string;
    categoryLabel: string;
    title: string;
    slogan: string;
    description: string;
    image: string;
    price?: string;
    specs: { label: string; value: string; icon?: React.ReactNode }[];
    comparison?: { label: string; naluz: string; others: string }[];
    impact?: string;
}

const products: Product[] = [
    {
        id: 1,
        category: "faciales",
        categoryLabel: "Cuidado Facial",
        title: "Limpieza Facial Profunda",
        slogan: "Piel radiante y sana",
        description: "Tratamiento revitalizante que elimina impurezas y devuelve la luminosidad natural a tu rostro usando productos orgánicos premium.",
        image: "/images/service-1.webp",
        price: "$45.00",
        specs: [
            { label: "Duración", value: "60 min", icon: <Clock size={14} /> },
            { label: "Tipo", value: "Todo tipo de piel", icon: <Heart size={14} /> }
        ]
    },
    {
        id: 2,
        category: "estilismo",
        categoryLabel: "Estilismo & Capilar",
        title: "Corte & Peinado de Autor",
        slogan: "Tu estilo, tu esencia",
        description: "Transformamos tu look con técnicas de corte vanguardistas y un peinado que resalta tus mejores rasgos.",
        image: "/images/service-2.webp",
        price: "$35.00",
        specs: [
            { label: "Servicio", value: "Corte + Secado", icon: <Zap size={14} /> },
            { label: "Duración", value: "45-60 min", icon: <Clock size={14} /> }
        ],
        comparison: [
            { label: "Acabado", naluz: "Premium Gloss", others: "Standard" },
            { label: "Duración Peinado", naluz: "48h+", others: "12h" }
        ]
    },
    {
        id: 3,
        category: "manicure",
        categoryLabel: "Manicure & Pedicure",
        title: "Spa de Uñas Premium",
        slogan: "Detalles que enamoran",
        description: "Cuidado integral para tus manos con esmaltado semipermanente de larga duración y exfoliación hidratante.",
        image: "/images/service-3.webp",
        price: "$25.00",
        specs: [
            { label: "Esmalte", value: "Gel de Larga Duración", icon: <ShieldCheck size={14} /> },
            { label: "Incluye", value: "Exfoliación", icon: <Heart size={14} /> }
        ]
    },
    {
        id: 4,
        category: "corporal",
        categoryLabel: "Tratamientos Corporales",
        title: "Masaje Relajante con Aroma",
        slogan: "Desconexión absoluta",
        description: "Elimina el estrés con nuestra terapia de masajes usando aceites esenciales que equilibran cuerpo y mente.",
        image: "/images/service-4.webp",
        price: "$60.00",
        specs: [
            { label: "Técnica", value: "Sueco / Aroma", icon: <Activity size={14} /> },
            { label: "Duración", value: "75 min", icon: <Clock size={14} /> }
        ]
    },
    {
        id: 5,
        category: "faciales",
        categoryLabel: "Cuidado Facial",
        title: "Hidratación Profunda",
        slogan: "Adiós a la sequedad",
        description: "Mascarilla de ácido hialurónico para una piel tersa y profundamente hidratada.",
        image: "/images/service-5.webp",
        price: "$40.00",
        specs: [
            { label: "Hidratación", value: "+80%", icon: <Activity size={14} /> },
            { label: "Producto", value: "Hialurónico Pro", icon: <Zap size={14} /> }
        ]
    },
    {
        id: 6,
        category: "estilismo",
        categoryLabel: "Estilismo",
        title: "Hidratación Capilar",
        slogan: "Brillo espejo",
        description: "Tratamiento de keratina o colágeno para recuperar la vitalidad de tu cabello.",
        image: "/images/service-6.webp",
        price: "$55.00",
        specs: [
            { label: "Tipo", value: "Recuperación", icon: <Heart size={14} /> },
            { label: "Protección", value: "UVA/UVB", icon: <ShieldCheck size={14} /> }
        ]
    }
];

const categories = [
    { id: "all", label: "Todos" },
    { id: "faciales", label: "Faciales" },
    { id: "estilismo", label: "Estilismo" },
    { id: "manicure", label: "Uñas" },
    { id: "corporal", label: "Corporal" }
];

const ProductGallery = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    const filteredProducts = activeTab === "all"
        ? products
        : products.filter(p => p.category === activeTab);

    const totalPages = Math.ceil(filteredProducts.length / pageSize);
    const productsToShow = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handleTabChange = (id: string) => {
        setActiveTab(id);
        setCurrentPage(1);
    };

    return (
        <section id="servicios" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-rose text-sm font-sans tracking-[0.3em] uppercase font-bold block"
                    >
                        Excelencia en Bienestar
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
                        Lumina: Servicios de Belleza de <span className="text-rose italic">Élite</span>
                    </h2>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleTabChange(cat.id)}
                            className={`px-6 py-2 rounded-full font-sans text-sm font-bold transition-all border ${activeTab === cat.id
                                ? 'bg-gold text-white border-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                                : 'bg-transparent text-foreground/40 border-rose/20 hover:border-gold/50'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {productsToShow.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedProduct(product)}
                                className="group relative cursor-pointer"
                            >
                                <div className="relative aspect-square rounded-3xl overflow-hidden border border-rose/5 bg-white backdrop-blur-sm group-hover:border-gold/30 transition-all group-hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] shadow-sm">
                                    {/* Image */}
                                    <Image
                                        src={product.image}
                                        alt={`Lámparas LED y material eléctrico en Loja - ${product.title}`}
                                        fill
                                        className="object-cover opacity-50 group-hover:opacity-75 group-hover:scale-110 transition-all duration-700"
                                        unoptimized
                                    />

                                    {/* Overlay Content */}
                                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                {product.specs[0].icon && <span className="text-rose">{product.specs[0].icon}</span>}
                                                <span className="text-white font-mono text-xs font-bold">{product.specs[0].value}</span>
                                            </div>
                                            {product.price && <span className="text-rose font-sans font-bold text-lg">{product.price}</span>}
                                        </div>
                                        <h4 className="text-xl font-serif font-bold text-white mb-2">{product.title}</h4>
                                        <div className="flex items-center justify-between">
                                            <p className="text-white/40 text-xs font-sans uppercase tracking-widest">{product.categoryLabel}</p>
                                            <span className="text-rose/80 text-[10px] uppercase font-bold tracking-tighter group-hover:text-rose transition-colors">Ver Detalles</span>
                                        </div>
                                    </div>

                                    {/* Hover Badge */}
                                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="bg-gold text-black p-3 rounded-full shadow-xl">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-16 flex flex-col items-center gap-6">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className={`p-4 rounded-full border transition-all ${currentPage === 1
                                    ? 'border-white/5 text-white/20 cursor-not-allowed'
                                    : 'border-white/10 text-white hover:border-gold hover:text-gold'
                                    }`}
                            >
                                <ArrowRight size={20} className="rotate-180" />
                            </button>

                            <div className="flex gap-2">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`w-2 h-2 rounded-full transition-all ${currentPage === i + 1
                                            ? 'bg-gold w-8'
                                            : 'bg-white/20 hover:bg-white/40'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className={`p-4 rounded-full border transition-all ${currentPage === totalPages
                                    ? 'border-white/5 text-white/20 cursor-not-allowed'
                                    : 'border-white/10 text-white hover:border-gold hover:text-gold'
                                    }`}
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                        <p className="text-white/40 text-xs font-sans uppercase tracking-[0.2em]">
                            Página {currentPage} de {totalPages}
                        </p>
                    </div>
                )}
                {/* Modal Lightbox */}
                <AnimatePresence>
                    {selectedProduct && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProduct(null)}
                                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-anthracite border border-white/10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl z-10 grid grid-cols-1 lg:grid-cols-2"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-full text-white/80 hover:text-white transition-colors"
                                >
                                    <X size={24} className="md:size-[28px]" />
                                </button>

                                {/* Modal Visual */}
                                <div className="relative aspect-video lg:aspect-auto h-full min-h-[250px] md:min-h-[400px]">
                                    <Image
                                        src={selectedProduct.image}
                                        alt={selectedProduct.title}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-transparent to-transparent hidden lg:block" />
                                </div>

                                {/* Modal Content */}
                                <div className="p-6 md:p-12 flex flex-col justify-center">
                                    <span className="text-rose font-sans font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-2">
                                        {selectedProduct.categoryLabel}
                                    </span>
                                    <h3 className="text-2xl md:text-5xl font-serif font-bold text-white mb-2">
                                        {selectedProduct.title}
                                    </h3>
                                    <p className="text-rose italic font-serif text-base md:text-lg mb-6 leading-none">"{selectedProduct.slogan}"</p>

                                    <p className="text-white/70 font-sans text-sm md:text-base leading-relaxed mb-8">
                                        {selectedProduct.description}
                                    </p>

                                    {/* Technical Table */}
                                    <div className="space-y-4 mb-8">
                                        <h5 className="text-white/40 text-xs font-bold uppercase tracking-widest border-b border-white/5 pb-2">Especificaciones Técnicas</h5>
                                        <div className="grid grid-cols-1 gap-3">
                                            {selectedProduct.specs.map((spec, i) => (
                                                <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0 font-sans">
                                                    <span className="text-white/60 text-sm flex items-center gap-3">
                                                        {spec.icon} {spec.label}
                                                    </span>
                                                    <span className="text-white font-mono font-bold text-sm">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Comparative Table (for Bullet) */}
                                    {selectedProduct.comparison && (
                                        <div className="mb-8 p-6 rounded-2xl bg-gold/5 border border-gold/20">
                                            <h5 className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Eficiencia Naluz vs Tradicional</h5>
                                            <div className="space-y-3">
                                                {selectedProduct.comparison.map((item, i) => (
                                                    <div key={i} className="flex justify-between items-center text-sm">
                                                        <span className="text-white/60">{item.label}</span>
                                                        <div className="flex gap-4 font-mono font-bold">
                                                            <span className="text-gold">{item.naluz}</span>
                                                            <span className="text-white/20 line-through">{item.others}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Conversion Button */}
                                    <a
                                        href="https://wa.me/593996264362"
                                        target="_blank"
                                        className="flex items-center justify-center gap-3 bg-gold hover:bg-amber text-black py-4 px-8 rounded-2xl font-sans font-bold text-lg transition-all group shadow-xl shadow-gold/20"
                                    >
                                        <MessageCircle size={24} />
                                        <span>Consultar Disponibilidad</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <p className="mt-4 text-[10px] text-white/30 text-center uppercase tracking-widest">
                                        Visítanos en Celica y 18 de Nov, Loja
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ProductGallery;
