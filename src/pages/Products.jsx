import React, { useState } from 'react';
import { Download, Check, PackageOpen } from 'lucide-react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      category: 'management',
      name: 'Perforated Cable Trays',
      desc: 'Manufactured from high-grade galvanized steel, engineered for efficient cable routing and proper ventilation.',
      specs: ['Thickness: 1.0mm - 2.0mm', 'Hot-Dip Galvanized & Powder Coated', 'High load capacity'],
      badge: 'Best Seller',
    },
    {
      id: 2,
      category: 'management',
      name: 'Heavy Duty Cable Ladders',
      desc: 'Robust structural side-rail design built for heavy power cabling in industrial plants and infrastructure.',
      specs: ['Optimal strength for massive loads', 'NEMA & IEC compliant', 'Corrosion resistant'],
      badge: 'Industrial',
    },
    {
      id: 3,
      category: 'management',
      name: 'Wire Mesh Cable Trays',
      desc: 'Lightweight and flexible wire mesh system designed specifically for telecommunications and data centers.',
      specs: ['Easy on-site fabrication', 'Maximum airflow & ventilation', 'Zinc plated finish'],
      badge: 'Telecom',
    },
    {
      id: 4,
      category: 'management',
      name: 'Cable Tray Covers',
      desc: 'Secure protective covers designed to shield cables from external environmental hazards and debris.',
      specs: ['Peak, Flanged, and Solid types', 'Secure snap-on installation', 'Weatherproof protection'],
      badge: 'Accessory',
    },
    {
      id: 5,
      category: 'management',
      name: 'Cable Trunking Systems',
      desc: 'Enclosed sheet metal trunking systems for commercial wiring and indoor office cable routing.',
      specs: ['Removable lid for easy access', 'Clean aesthetic appearance', 'Pre-punched knockouts'],
      badge: 'Commercial',
    },
    {
      id: 6,
      category: 'building',
      name: 'Expanded Plaster Mesh',
      desc: 'Expanded metal mesh engineered to reinforce plasterwork and prevent structural wall cracks.',
      specs: ['Treated corrosion-resistant steel', 'Superior cement adhesion', 'Standard gauge sizes'],
      badge: 'Building',
    },
    {
      id: 7,
      category: 'building',
      name: 'Corner Bead Profiles',
      desc: 'Galvanized steel corner beads providing straight, impact-resistant external corners for wall plaster.',
      specs: ['Precision straightness', 'Perforated wings for keying', 'Impact resistant'],
      badge: 'Building',
    },
    {
      id: 8,
      category: 'building',
      name: 'Drywall Studs & Tracks',
      desc: 'Light gauge galvanized steel framing components used for partitions and suspended ceilings.',
      specs: ['High tensile strength steel', 'Pre-punched service holes', 'Quick screw-fix installation'],
      badge: 'Framing',
    },
    {
      id: 9,
      category: 'management',
      name: 'Unistrut Channels (C-Channels)',
      desc: 'Versatile slotted or solid metal framing channels used for structural support and mechanical brackets.',
      specs: ['Available in Single & Double', 'Standard depth: 41mm', 'Heavy gauge carbon steel'],
      badge: 'Support',
    },
    {
      id: 10,
      category: 'management',
      name: 'Cable Management Brackets',
      desc: 'Heavy-duty wall and ceiling brackets designed to securely support cable tray and ladder runs.',
      specs: ['Cantilever & Trapeze brackets', 'High load rating support', 'Hot-dip galvanized coating'],
      badge: 'Hardware',
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      
      {/* Header Title */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          KIANKO <span className="text-kiankoRed">Product Catalog</span>
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto font-medium">
          Explore our complete portfolio of 10 professional steel lines, cable management systems, and building profiles.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-3 flex-wrap">
        {[
          { id: 'all', label: 'All Products (10)' },
          { id: 'management', label: 'Cable Management Systems' },
          { id: 'building', label: 'Building & Plaster Profiles' },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setSelectedCategory(btn.id)}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform active:scale-95 ${
              selectedCategory === btn.id
                ? 'bg-kiankoRed text-white shadow-lg shadow-red-900/30'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Products Grid (10 Cards) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              {/* Product Visual Box */}
              <div className="relative overflow-hidden h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C9252C_1px,transparent_1px)] [background-size:12px_12px]"></div>
                <div className="p-3 bg-kiankoRed/20 rounded-xl text-red-400 mb-2 group-hover:scale-110 transition-transform">
                  <PackageOpen className="w-8 h-8" />
                </div>
                <h4 className="text-white font-bold text-sm tracking-wide relative z-10">{product.name}</h4>
                <div className="absolute top-4 left-4 bg-kiankoRed text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                  {product.badge}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-kiankoRed transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{product.desc}</p>
                
                {/* Specifications */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technical Specs:</h4>
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 pt-0">
              <button className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-kiankoRed text-white font-bold py-3 rounded-xl transition-colors duration-300 shadow-md">
                <Download className="w-4 h-4" />
                <span>Download Datasheet</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}