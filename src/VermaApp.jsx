import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Search, Phone, MessageCircle, ShoppingBag, Menu, X, ChevronLeft, ChevronRight,
  Smartphone, Wrench, Headphones, Tv, Refrigerator, WashingMachine, Watch,
  ShieldCheck, Award, Zap, Users, CheckCircle2, HeartHandshake, Sparkles,
  MapPin, Clock, Send, Plus, Trash2, Edit3, Check, AlertCircle, SlidersHorizontal,
  ArrowUpRight, Star, Eye, Layers, Settings, LayoutDashboard, Package, Tag,
  MessageSquare, ExternalLink, RefreshCw, Info, Cpu, BatteryCharging, Volume2,
  Camera, Droplets, Terminal, Unlock, Fan, Microwave, Speaker
} from 'lucide-react';

/**
 * VERMA ELECTRONICS - MAIN SARDARPURA, LALRU, PUNJAB, INDIA
 * Complete Single-File React Application
 * Features:
 * - Premium Apple/Samsung/Croma-inspired UI with Deep Navy (#101828), Electric Blue (#2563EB), Bright Cyan (#00C2FF)
 * - Honest Demo Catalog labeling (no fake inventory misrepresentation)
 * - Editable Store Phone, WhatsApp, Opening Hours & Location via Admin Settings (no invented phone numbers)
 * - Genuine Customer Feedback system (zero pre-seeded fake reviews; real submission + admin moderation)
 * - Full Admin Dashboard (Products, Offers, Repair Bookings, Enquiries, Reviews, Store Settings)
 */

// Reliable high-resolution Unsplash electronics photography mapped by subject
const IMAGES = {
  iphone16: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80',
  samsungS25: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80',
  oneplusNord: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
  redmiNote: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
  vivoV40: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80',
  realmePro: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
  refurbIphone: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=900&q=80',
  usedAndroid: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
  repairBench: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80',
  repairTech: 'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=1000&q=80',
  fridge: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80',
  washingMachine: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80',
  ledTv: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80',
  airConditioner: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?auto=format&fit=crop&w=900&q=80',
  microwave: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=900&q=80',
  kitchenBlender: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=900&q=80',
  earbuds: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80',
  smartwatch: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=900&q=80',
  btSpeaker: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80',
  chargerCable: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80',
  powerBank: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80',
  phoneCase: 'https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=900&q=80',
  otherElectronics: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=900&q=80',
  heroSlide1: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1400&q=85',
  heroSlide3: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=85',
  heroSlide4: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=85',
};

// Reusable Resilient Image Component with crisp SVG fallback so zero broken images ever appear
const SafeImage = ({ src, alt, className = '', fallbackLabel = 'Verma Electronics' }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F3F6FA] to-[#E2E8F0] text-[#101828] p-4 text-center ${className}`}>
        <div className="w-12 h-12 rounded-2xl bg-[#101828] text-[#00C2FF] flex items-center justify-center mb-2 shadow-md">
          <Smartphone className="w-6 h-6" />
        </div>
        <span className="text-xs font-semibold tracking-tight text-[#182230] line-clamp-2">{fallbackLabel || alt}</span>
        <span className="text-[10px] text-slate-500 mt-0.5">Demo Visual</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

// All 11 Required Shopping Categories
const CATEGORIES = [
  {
    id: 'Latest Smartphones',
    title: 'Latest Smartphones',
    description: 'Flagship & 5G Android/iOS phones from top global brands.',
    image: IMAGES.iphone16,
    badge: '5G Ready',
  },
  {
    id: 'Second-Hand & Refurbished Mobiles',
    title: 'Second-Hand & Refurbished Mobiles',
    description: 'Quality-checked pre-owned smartphones with transparent condition grading.',
    image: IMAGES.refurbIphone,
    badge: 'Certified Check',
  },
  {
    id: 'Mobile Accessories',
    title: 'Mobile Accessories',
    description: 'Protective covers, tempered glass, fast chargers, cables & power banks.',
    image: IMAGES.chargerCable,
    badge: 'Daily Essentials',
  },
  {
    id: 'Mobile Repairing Services',
    title: 'Mobile Repairing Services',
    description: 'Screen, battery, charging port & motherboard diagnostics in Lalru.',
    image: IMAGES.repairTech,
    badge: 'Expert Lab',
    isService: true,
  },
  {
    id: 'Smartwatches',
    title: 'Smartwatches',
    description: 'AMOLED fitness trackers, Bluetooth calling watches & straps.',
    image: IMAGES.smartwatch,
    badge: 'Wearables',
  },
  {
    id: 'Bluetooth Speakers & Earbuds',
    title: 'Bluetooth Speakers & Earbuds',
    description: 'ANC wireless earbuds, neckbands & portable party speakers.',
    image: IMAGES.earbuds,
    badge: 'Hi-Fi Audio',
  },
  {
    id: 'LED TVs',
    title: 'LED TVs',
    description: '4K Ultra HD Smart Google & Android LED televisions for living rooms.',
    image: IMAGES.ledTv,
    badge: '4K HDR',
  },
  {
    id: 'Refrigerators',
    title: 'Refrigerators',
    description: 'Energy-efficient single door, double door & convertible refrigerators.',
    image: IMAGES.fridge,
    badge: 'Inverter Tech',
  },
  {
    id: 'Washing Machines',
    title: 'Washing Machines',
    description: 'Front-load, top-load & semi-automatic washers for every family.',
    image: IMAGES.washingMachine,
    badge: 'Home Care',
  },
  {
    id: 'Kitchen Appliances',
    title: 'Kitchen Appliances',
    description: 'Microwave ovens, mixer grinders, induction cooktops & kettles.',
    image: IMAGES.microwave,
    badge: 'Smart Kitchen',
  },
  {
    id: 'Other Electronics',
    title: 'Other Electronics',
    description: 'Air conditioners, ceiling fans, stabilizers, memory cards & routers.',
    image: IMAGES.airConditioner,
    badge: 'All Electronics',
  },
];

// Initial Realistic Demo Catalog (Clearly marked as Demo Catalog items)
const INITIAL_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Apple iPhone 16',
    brand: 'Apple',
    category: 'Latest Smartphones',
    price: 79900,
    originalPrice: 84900,
    ram: '8GB',
    storage: '128GB',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Trending Smartphones',
    image: IMAGES.iphone16,
    specs: ['A18 Chip', '6.1" Super Retina XDR', '48MP Fusion Camera', 'USB-C'],
    description: 'Sample showcase entry for Apple iPhone 16. Contact Verma Electronics in Main Sardarpura, Lalru for current color availability and today’s store offer.',
  },
  {
    id: 'prod-2',
    name: 'Samsung Galaxy S25',
    brand: 'Samsung',
    category: 'Latest Smartphones',
    price: 80999,
    originalPrice: 85999,
    ram: '12GB',
    storage: '256GB',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Trending Smartphones',
    image: IMAGES.samsungS25,
    specs: ['Snapdragon Elite', '120Hz Dynamic AMOLED', 'Galaxy AI', '50MP Triple Cam'],
    description: 'Sample showcase entry for Samsung Galaxy S25. Visit our Lalru showroom for live hands-on experience and exchange evaluation.',
  },
  {
    id: 'prod-3',
    name: 'OnePlus Nord 4 5G',
    brand: 'OnePlus',
    category: 'Latest Smartphones',
    price: 29999,
    originalPrice: 32999,
    ram: '8GB',
    storage: '256GB',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Trending Smartphones',
    image: IMAGES.oneplusNord,
    specs: ['Metal Unibody', '100W SUPERVOOC', '5500mAh Battery', '120Hz AMOLED'],
    description: 'Sample showcase entry for OnePlus Nord 4 5G. Enquire on WhatsApp for current variant availability at Verma Electronics.',
  },
  {
    id: 'prod-4',
    name: 'Redmi Note 14 Pro 5G',
    brand: 'Redmi',
    category: 'Latest Smartphones',
    price: 23999,
    originalPrice: 26999,
    ram: '8GB',
    storage: '128GB',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Trending Smartphones',
    image: IMAGES.redmiNote,
    specs: ['Curved 1.5K AMOLED', '50MP OIS Camera', 'IP68 Rated', 'Fast Charge'],
    description: 'Sample showcase entry for Redmi Note 14 Pro 5G. Popular value smartphone for students and families in Lalru.',
  },
  {
    id: 'prod-5',
    name: 'Vivo V40 5G',
    brand: 'Vivo',
    category: 'Latest Smartphones',
    price: 34999,
    originalPrice: 37999,
    ram: '8GB',
    storage: '256GB',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Trending Smartphones',
    image: IMAGES.vivoV40,
    specs: ['ZEISS Portrait Camera', '5500mAh Slim Battery', '80W FlashCharge', '5G'],
    description: 'Sample showcase entry for Vivo V40 5G with ZEISS optics. Ask Mr. Verma for latest store pricing.',
  },
  {
    id: 'prod-6',
    name: 'Realme 13 Pro+ 5G',
    brand: 'Realme',
    category: 'Latest Smartphones',
    price: 28999,
    originalPrice: 31999,
    ram: '12GB',
    storage: '256GB',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Trending Smartphones',
    image: IMAGES.realmePro,
    specs: ['Sony Periscope Telephoto', '120Hz Vision Display', '80W Charging'],
    description: 'Sample showcase entry for Realme 13 Pro+ 5G. Check in-store demo units at Main Sardarpura, Lalru.',
  },
  {
    id: 'prod-7',
    name: 'Apple iPhone 14 (Certified Refurbished)',
    brand: 'Apple',
    category: 'Second-Hand & Refurbished Mobiles',
    price: 41500,
    originalPrice: 54900,
    ram: '6GB',
    storage: '128GB',
    condition: 'Refurbished',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Trending Smartphones',
    image: IMAGES.refurbIphone,
    specs: ['Multi-Point Tested', 'A15 Bionic', 'Verified Battery Health', 'Bill & Check'],
    description: 'Sample showcase entry for refurbished smartphones at Verma Electronics. Every pre-owned unit undergoes thorough hardware diagnostics before sale.',
  },
  {
    id: 'prod-8',
    name: 'Samsung Galaxy A54 (Pre-Owned)',
    brand: 'Samsung',
    category: 'Second-Hand & Refurbished Mobiles',
    price: 18500,
    originalPrice: 28999,
    ram: '8GB',
    storage: '128GB',
    condition: 'Used',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Trending Smartphones',
    image: IMAGES.usedAndroid,
    specs: ['Super AMOLED 120Hz', '50MP OIS', 'Clean Condition', 'Shop Tested'],
    description: 'Sample showcase entry for clean second-hand smartphones. Stock changes daily—message us on WhatsApp for today’s pre-owned list.',
  },
  {
    id: 'prod-9',
    name: 'Samsung 253L Frost-Free Double Door Refrigerator',
    brand: 'Samsung',
    category: 'Refrigerators',
    price: 26490,
    originalPrice: 31990,
    ram: 'N/A',
    storage: '253L',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Featured Home Appliances',
    image: IMAGES.fridge,
    specs: ['Digital Inverter', 'Convertible Freezer', 'Stabilizer Free Operation'],
    description: 'Sample showcase entry for Samsung Double Door Refrigerator. Local home delivery in Lalru & nearby villages available upon enquiry.',
  },
  {
    id: 'prod-10',
    name: 'LG 7 Kg 5-Star Front Load Washing Machine',
    brand: 'LG',
    category: 'Washing Machines',
    price: 29990,
    originalPrice: 35990,
    ram: 'N/A',
    storage: '7 Kg',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Featured Home Appliances',
    image: IMAGES.washingMachine,
    specs: ['Direct Drive Motor', 'Steam Wash', 'In-Built Heater', '5-Star Energy'],
    description: 'Sample showcase entry for LG Front-Load Washing Machine. Contact Verma Electronics for installation and seasonal appliance deals.',
  },
  {
    id: 'prod-11',
    name: 'Sony Bravia 55" 4K Ultra HD Smart LED TV',
    brand: 'Sony',
    category: 'LED TVs',
    price: 57990,
    originalPrice: 69900,
    ram: 'N/A',
    storage: '55 Inch',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Featured Home Appliances',
    image: IMAGES.ledTv,
    specs: ['4K HDR Processor X1', 'Google TV', 'Dolby Audio', 'Motionflow XR'],
    description: 'Sample showcase entry for Sony Bravia 55-inch 4K Google TV. Experience vibrant picture quality at our Lalru store.',
  },
  {
    id: 'prod-12',
    name: 'LG 1.5 Ton 5-Star AI Dual Inverter Split AC',
    brand: 'LG',
    category: 'Other Electronics',
    price: 44990,
    originalPrice: 52990,
    ram: 'N/A',
    storage: '1.5 Ton',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Featured Home Appliances',
    image: IMAGES.airConditioner,
    specs: ['AI Convertible 6-in-1', '100% Copper Condenser', 'HD Filter with Anti-Virus'],
    description: 'Sample showcase entry for split air conditioners. Ask for today’s best summer cooling package at Verma Electronics.',
  },
  {
    id: 'prod-13',
    name: 'Samsung 28L Convection Microwave Oven',
    brand: 'Samsung',
    category: 'Kitchen Appliances',
    price: 12490,
    originalPrice: 15590,
    ram: 'N/A',
    storage: '28 Litres',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Featured Home Appliances',
    image: IMAGES.microwave,
    specs: ['Ceramic Enamel Cavity', 'Slim Fry Tech', 'Tandoor & Curd Mode'],
    description: 'Sample showcase entry for Convection Microwave Oven suitable for baking, grilling, and daily reheating.',
  },
  {
    id: 'prod-14',
    name: 'Heavy-Duty 750W Kitchen Mixer Grinder',
    brand: 'Philips',
    category: 'Kitchen Appliances',
    price: 3890,
    originalPrice: 4795,
    ram: 'N/A',
    storage: '3 Jars',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Featured Home Appliances',
    image: IMAGES.kitchenBlender,
    specs: ['750W Copper Motor', '3 Stainless Steel Jars', 'Overload Protection'],
    description: 'Sample showcase entry for 750W Mixer Grinder for Indian kitchen grinding needs.',
  },
  {
    id: 'prod-15',
    name: 'Active Noise Cancelling Wireless Earbuds Pro',
    brand: 'OnePlus',
    category: 'Bluetooth Speakers & Earbuds',
    price: 2999,
    originalPrice: 3999,
    ram: 'N/A',
    storage: '38Hr Battery',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Best-Selling Accessories',
    image: IMAGES.earbuds,
    specs: ['Up to 45dB ANC', 'Dual Connection', 'IP55 Water Resistant', 'Fast Pair'],
    description: 'Sample showcase entry for ANC wireless earbuds. Wide range of wired & wireless audio available in-store.',
  },
  {
    id: 'prod-16',
    name: 'AMOLED Bluetooth Calling Smartwatch',
    brand: 'Samsung',
    category: 'Smartwatches',
    price: 4499,
    originalPrice: 6999,
    ram: 'N/A',
    storage: '1.78" AMOLED',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Best-Selling Accessories',
    image: IMAGES.smartwatch,
    specs: ['Always-On AMOLED', 'Bluetooth Calling', 'SpO2 & Heart Rate', '7-Day Battery'],
    description: 'Sample showcase entry for AMOLED calling smartwatches for students and fitness enthusiasts.',
  },
  {
    id: 'prod-17',
    name: 'Portable Waterproof Bluetooth Party Speaker',
    brand: 'Sony',
    category: 'Bluetooth Speakers & Earbuds',
    price: 4990,
    originalPrice: 6490,
    ram: 'N/A',
    storage: '16Hr Playtime',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Best-Selling Accessories',
    image: IMAGES.btSpeaker,
    specs: ['Extra Bass Radiator', 'IP67 Waterproof', 'USB-C Charging', 'Stereo Pair'],
    description: 'Sample showcase entry for portable Bluetooth speakers. Test sound clarity at Verma Electronics, Lalru.',
  },
  {
    id: 'prod-18',
    name: '45W GaN USB-C Super Fast Charger & Braided Cable',
    brand: 'Samsung',
    category: 'Mobile Accessories',
    price: 1699,
    originalPrice: 2499,
    ram: 'N/A',
    storage: '45W PD',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Best-Selling Accessories',
    image: IMAGES.chargerCable,
    specs: ['45W PPS Fast Charge', 'Over-Voltage Safe', 'Includes 1.5m Type-C Cable'],
    description: 'Sample showcase entry for fast chargers, USB cables, tempered glass, and shockproof mobile covers.',
  },
  {
    id: 'prod-19',
    name: '20,000mAh 22.5W Fast Charging Power Bank',
    brand: 'Xiaomi',
    category: 'Mobile Accessories',
    price: 1899,
    originalPrice: 2499,
    ram: 'N/A',
    storage: '20000mAh',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Best-Selling Accessories',
    image: IMAGES.powerBank,
    specs: ['Triple Output Ports', '22.5W Two-Way Fast Charge', '12-Layer Circuit Protection'],
    description: 'Sample showcase entry for high-capacity power banks and travel accessories.',
  },
  {
    id: 'prod-20',
    name: 'MagSafe Shockproof Case + Edge-to-Edge Tempered Glass Combo',
    brand: 'Apple',
    category: 'Mobile Accessories',
    price: 699,
    originalPrice: 1199,
    ram: 'N/A',
    storage: 'All Models',
    condition: 'New',
    availability: 'Demo Showcase Item',
    featuredGroup: 'Best-Selling Accessories',
    image: IMAGES.phoneCase,
    specs: ['Anti-Yellow Clear Back', '9H Hardness Glass', 'Free In-Store Application'],
    description: 'Sample showcase entry for mobile covers, skins, memory cards, and precision tempered glass installation.',
  },
];

// Initial Editable Promotional Offers
const INITIAL_OFFERS = [
  {
    id: 'off-1',
    tag: 'Special Mobile Offers',
    title: 'Latest 5G Smartphones Showcase',
    description: 'Explore top models from Apple, Samsung, OnePlus, Vivo, Oppo, Redmi & Realme with transparent store guidance.',
    highlight: 'Ask for Today’s Best Store Price',
    color: 'from-[#101828] to-[#1E3A8A]',
    image: IMAGES.samsungS25,
  },
  {
    id: 'off-2',
    tag: 'Exchange Offers',
    title: 'Upgrade Your Old Phone Easily',
    description: 'Bring your working smartphone to Main Sardarpura, Lalru for an honest on-the-spot valuation toward a new device.',
    highlight: 'Instant In-Store Valuation',
    color: 'from-[#0F172A] to-[#0369A1]',
    image: IMAGES.iphone16,
  },
  {
    id: 'off-3',
    tag: 'Accessories Combos',
    title: 'Complete Protection & Power Bundles',
    description: 'Combine Tempered Glass + Back Cover + Fast Charger or Wireless Earbuds at bundled local store value.',
    highlight: 'Free Tempered Glass Fitting',
    color: 'from-[#101828] to-[#2563EB]',
    image: IMAGES.earbuds,
  },
  {
    id: 'off-4',
    tag: 'Appliance & Seasonal Deals',
    title: 'Home Appliances for Every Season',
    description: 'Refrigerators, Washing Machines, 4K LED TVs, ACs & Kitchen Appliances with friendly after-sales support.',
    highlight: 'Family Package Enquiries Open',
    color: 'from-[#0B1120] to-[#1D4ED8]',
    image: IMAGES.fridge,
  },
];

// 8 Mobile Repair Services
const REPAIR_SERVICES = [
  {
    title: 'Broken Screen Replacement',
    desc: 'High-clarity OLED & LCD display replacements with precision frame bonding and touch calibration.',
    icon: Smartphone,
    turnaround: 'Same-Day Service (Subject to Parts)',
  },
  {
    title: 'Battery Replacement',
    desc: 'Fix rapid battery drain, swelling, or sudden shutdowns with reliable tested replacement batteries.',
    icon: BatteryCharging,
    turnaround: '45–90 Mins Typical',
  },
  {
    title: 'Charging Port Repair',
    desc: 'Micro-soldering & flex replacement for loose USB-C/Lightning ports and slow charging faults.',
    icon: Zap,
    turnaround: 'Same-Day Diagnosis',
  },
  {
    title: 'Speaker & Microphone Repair',
    desc: 'Restore crystal-clear call audio, earpiece volume, loudspeaker clarity, and mic pickup.',
    icon: Volume2,
    turnaround: 'Quick Bench Fix',
  },
  {
    title: 'Camera Repair',
    desc: 'Rear & front camera module replacement, lens glass restoration, and focus stabilization repair.',
    icon: Camera,
    turnaround: 'Component Check',
  },
  {
    title: 'Water Damage Repair',
    desc: 'Ultrasonic motherboard cleaning, corrosion removal, and short-circuit recovery for liquid spills.',
    icon: Droplets,
    turnaround: 'Priority Inspection',
  },
  {
    title: 'Software Issues',
    desc: 'OS updates, boot-loop recovery, storage optimization, data transfer & virus/adware cleanup.',
    icon: Terminal,
    turnaround: '1–2 Hours Typical',
  },
  {
    title: 'Phone Unlocking & Troubleshooting',
    desc: 'Authorized screen passcode reset, account recovery & network troubleshooting (with valid proof of ownership).',
    icon: Unlock,
    turnaround: 'Proof of Ownership Required',
  },
];

// 8 Trust Pillars
const TRUST_PILLARS = [
  { title: 'Trusted Local Electronics Store', desc: 'Serving families, students & professionals in Main Sardarpura, Lalru with honesty.', icon: ShieldCheck },
  { title: 'Quality Products', desc: 'Carefully sourced smartphones, accessories, and dependable home appliances.', icon: Award },
  { title: 'Expert Mobile Repairing', desc: 'Dedicated repair bench using precision tools and transparent fault diagnosis.', icon: Wrench },
  { title: 'Competitive Pricing', desc: 'Fair, straightforward local pricing with zero hidden charges.', icon: Tag },
  { title: 'Multiple Product Categories', desc: '11 specialized categories from smartphones to refrigerators under one roof.', icon: Layers },
  { title: 'Friendly Customer Support', desc: 'Personal guidance by Mr. Verma and team to help you pick what truly fits your needs.', icon: Users },
  { title: 'Genuine Product Information', desc: 'Clear specifications, honest condition grading, and transparent warranty details.', icon: CheckCircle2 },
  { title: 'After-Sales Assistance', desc: 'Reliable post-purchase setup, data transfer, and local support whenever you need it.', icon: HeartHandshake },
];

// Brand Showcase List
const BRANDS = [
  { name: 'Apple', tagline: 'iPhones & Wearables' },
  { name: 'Samsung', tagline: 'Galaxy & Home Appliances' },
  { name: 'OnePlus', tagline: '5G Smartphones & Audio' },
  { name: 'Xiaomi', tagline: 'Smartphones & Smart TVs' },
  { name: 'Redmi', tagline: 'Value 5G Series' },
  { name: 'Vivo', tagline: 'Camera Smartphones' },
  { name: 'Oppo', tagline: 'Reno & F Series' },
  { name: 'Realme', tagline: 'Performance Phones' },
  { name: 'LG', tagline: 'Washers, Fridges & ACs' },
  { name: 'Sony', tagline: 'Bravia TVs & Audio' },
];

// Hero Slides (4 Full-Width Slides)
const HERO_SLIDES = [
  {
    id: 0,
    eyebrow: 'VERMA ELECTRONICS • LALRU, PUNJAB',
    title: 'Discover Your Next Smartphone',
    subtitle: 'Your One-Stop Destination for Mobiles & Electronics. Explore the latest 5G smartphones, certified refurbished phones, and expert guidance in Main Sardarpura.',
    primaryCta: 'Explore Mobiles',
    primaryAction: 'mobiles',
    secondaryCta: 'Ask for Today’s Price',
    secondaryAction: 'whatsapp',
    image: IMAGES.heroSlide1,
    floatingCardTitle: '5G Flagships & Budget Phones',
    floatingCardSub: 'Demo Showcase Catalog Ready',
  },
  {
    id: 1,
    eyebrow: 'PRECISION DIAGNOSTICS & CARE',
    title: 'Expert Mobile Repair at the Right Price',
    subtitle: 'Cracked screen, weak battery, charging port fault, or water damage? Get fast, reliable, and transparent mobile repairing by experienced technicians.',
    primaryCta: 'Book a Repair',
    primaryAction: 'repair',
    secondaryCta: 'WhatsApp Repair Desk',
    secondaryAction: 'whatsapp_repair',
    image: IMAGES.repairBench,
    floatingCardTitle: 'All Major Brands Serviced',
    floatingCardSub: 'iPhone • Samsung • OnePlus • Vivo • Redmi',
  },
  {
    id: 2,
    eyebrow: 'APPLIANCES FOR MODERN FAMILIES',
    title: 'Make Your Home Smarter',
    subtitle: 'Upgrade your living space with energy-efficient Refrigerators, Front & Top-Load Washing Machines, 4K LED TVs, Air Conditioners, and Kitchen Appliances.',
    primaryCta: 'Explore Appliances',
    primaryAction: 'appliances',
    secondaryCta: 'Visit Lalru Showroom',
    secondaryAction: 'contact',
    image: IMAGES.heroSlide3,
    floatingCardTitle: 'Home & Kitchen Essentials',
    floatingCardSub: 'Trusted Local Support in Lalru',
  },
  {
    id: 3,
    eyebrow: 'AUDIO, POWER & PROTECTION',
    title: 'Everything Your Mobile Needs',
    subtitle: 'Shop wireless ANC earbuds, AMOLED smartwatches, Bluetooth speakers, GaN fast chargers, power banks, covers, and edge-to-edge tempered glass.',
    primaryCta: 'Shop Accessories',
    primaryAction: 'accessories',
    secondaryCta: 'View Combos',
    secondaryAction: 'offers',
    image: IMAGES.heroSlide4,
    floatingCardTitle: 'Daily Tech Essentials',
    floatingCardSub: 'Free In-Store Glass Application',
  },
];

export default function App() {
  // Navigation & Mode State ('store' | 'admin')
  const [viewMode, setViewMode] = useState('store');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [enquiryDrawerOpen, setEnquiryDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState(null);

  // Store Settings (Editable in Admin - zero invented phone numbers or hours)
  const [storeSettings, setStoreSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('ve_store_settings');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      businessName: 'Verma Electronics',
      ownerName: 'Mr. Verma',
      address: 'Main Sardarpura, Lalru, Punjab, India',
      phoneNumber: '', // Editable by owner in Admin
      whatsappNumber: '', // Editable by owner in Admin (e.g. 91XXXXXXXXXX)
      openingHours: 'Editable in Admin (e.g., Mon–Sun: 9:30 AM – 8:30 PM)',
      mapQuery: 'Main Sardarpura, Lalru, Punjab, India',
    };
  });

  // Products State (Editable in Admin)
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('ve_products');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_PRODUCTS;
  });

  // Offers State (Editable in Admin)
  const [offers, setOffers] = useState(() => {
    try {
      const saved = localStorage.getItem('ve_offers');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_OFFERS;
  });

  // Repair Bookings State (Submitted from Repair Form, managed in Admin)
  const [repairBookings, setRepairBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('ve_repairs');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  // Customer Enquiries State (Submitted from Contact Form, managed in Admin)
  const [enquiries, setEnquiries] = useState(() => {
    try {
      const saved = localStorage.getItem('ve_enquiries');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  // Genuine Customer Reviews State (Zero fake testimonials pre-populated)
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('ve_reviews');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  // Enquiry Bag / Shortlist State
  const [enquiryList, setEnquiryList] = useState([]);

  // Persist changes to localStorage safely
  useEffect(() => {
    try {
      localStorage.setItem('ve_store_settings', JSON.stringify(storeSettings));
      localStorage.setItem('ve_products', JSON.stringify(products));
      localStorage.setItem('ve_offers', JSON.stringify(offers));
      localStorage.setItem('ve_repairs', JSON.stringify(repairBookings));
      localStorage.setItem('ve_enquiries', JSON.stringify(enquiries));
      localStorage.setItem('ve_reviews', JSON.stringify(reviews));
    } catch {}
  }, [storeSettings, products, offers, repairBookings, enquiries, reviews]);

  // Toast Notification Helper
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3800);
  };

  // WhatsApp Link Builder (Uses configured store WhatsApp number if set, otherwise opens WhatsApp share with pre-filled message)
  const buildWhatsAppUrl = (messageText) => {
    const cleanNum = (storeSettings.whatsappNumber || '').replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(messageText);
    return cleanNum ? `https://wa.me/${cleanNum}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
  };

  const openWhatsAppEnquiry = (text) => {
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  // Hero Slider State
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);

  useEffect(() => {
    if (sliderPaused || viewMode !== 'store') return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [sliderPaused, viewMode]);

  // Product Catalog Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [selectedStorage, setSelectedStorage] = useState('All');
  const [selectedRam, setSelectedRam] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== 'All') count++;
    if (selectedBrand !== 'All') count++;
    if (selectedPriceRange !== 'All') count++;
    if (selectedStorage !== 'All') count++;
    if (selectedRam !== 'All') count++;
    if (selectedCondition !== 'All') count++;
    return count;
  }, [selectedCategory, selectedBrand, selectedPriceRange, selectedStorage, selectedRam, selectedCondition]);

  // Filtered Products Computation
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        !searchQuery.trim() ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesBrand = selectedBrand === 'All' || p.brand === selectedBrand;
      const matchesCondition = selectedCondition === 'All' || p.condition === selectedCondition;
      const matchesStorage = selectedStorage === 'All' || p.storage === selectedStorage;
      const matchesRam = selectedRam === 'All' || p.ram === selectedRam;

      let matchesPrice = true;
      if (selectedPriceRange === 'under10k') matchesPrice = p.price < 10000;
      else if (selectedPriceRange === '10kto30k') matchesPrice = p.price >= 10000 && p.price <= 30000;
      else if (selectedPriceRange === '30kto60k') matchesPrice = p.price > 30000 && p.price <= 60000;
      else if (selectedPriceRange === 'above60k') matchesPrice = p.price > 60000;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBrand &&
        matchesCondition &&
        matchesStorage &&
        matchesRam &&
        matchesPrice
      );
    });
  }, [
    products,
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedPriceRange,
    selectedStorage,
    selectedRam,
    selectedCondition,
  ]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setSelectedPriceRange('All');
    setSelectedStorage('All');
    setSelectedRam('All');
    setSelectedCondition('All');
  };

  // Smooth Scroll to Section Helper
  const scrollToSection = (sectionId, categoryFilter = null) => {
    if (viewMode !== 'store') {
      setViewMode('store');
    }
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
    }
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
  };

  // Enquiry Bag Handlers
  const toggleEnquiryItem = (product) => {
    setEnquiryList((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast(`Removed ${product.name} from your enquiry list`, 'info');
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Added ${product.name} to your enquiry list`);
        return [...prev, product];
      }
    });
  };

  // Repair Form State
  const [repairForm, setRepairForm] = useState({
    customerName: '',
    mobileNumber: '',
    phoneBrand: '',
    phoneModel: '',
    repairProblem: 'Broken Screen Replacement',
    visitDate: '',
  });
  const [repairTicket, setRepairTicket] = useState(null);

  const handleRepairSubmit = (e) => {
    e.preventDefault();
    if (!repairForm.customerName.trim() || !repairForm.mobileNumber.trim() || !repairForm.phoneBrand.trim() || !repairForm.phoneModel.trim()) {
      showToast('Please fill in your name, mobile number, phone brand, and model.', 'error');
      return;
    }
    const ticketId = `VE-REP-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking = {
      id: ticketId,
      ...repairForm,
      status: 'Pending',
      createdAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    };
    setRepairBookings((prev) => [newBooking, ...prev]);
    setRepairTicket(newBooking);
    showToast(`Repair request ${ticketId} logged! You can also send it via WhatsApp.`);
    setRepairForm({
      customerName: '',
      mobileNumber: '',
      phoneBrand: '',
      phoneModel: '',
      repairProblem: 'Broken Screen Replacement',
      visitDate: '',
    });
  };

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    subject: 'Product Price & Availability Enquiry',
    message: '',
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.phone.trim() || !contactForm.message.trim()) {
      showToast('Please enter your name, contact number, and message.', 'error');
      return;
    }
    const newEnquiry = {
      id: `ENQ-${Date.now()}`,
      ...contactForm,
      status: 'New',
      createdAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    };
    setEnquiries((prev) => [newEnquiry, ...prev]);
    showToast('Thank you! Your message has been recorded for Mr. Verma.');
    setContactForm({
      name: '',
      phone: '',
      subject: 'Product Price & Availability Enquiry',
      message: '',
    });
  };

  // Genuine Review Form State
  const [reviewForm, setReviewForm] = useState({
    customerName: '',
    rating: 5,
    serviceUsed: 'Smartphone Purchase',
    comment: '',
  });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.customerName.trim() || !reviewForm.comment.trim()) {
      showToast('Please provide your name and honest feedback.', 'error');
      return;
    }
    const newReview = {
      id: `REV-${Date.now()}`,
      ...reviewForm,
      approved: true, // Published immediately and manageable in Admin Dashboard
      createdAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    };
    setReviews((prev) => [newReview, ...prev]);
    showToast('Thank you for sharing your genuine feedback with Verma Electronics!');
    setReviewForm({
      customerName: '',
      rating: 5,
      serviceUsed: 'Smartphone Purchase',
      comment: '',
    });
  };

  // Horizontal Slider Ref Helper
  const HorizontalProductRow = ({ title, subtitle, badge, items, id }) => {
    const rowRef = useRef(null);

    const scrollRow = (dir) => {
      if (!rowRef.current) return;
      const offset = dir === 'left' ? -340 : 340;
      rowRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    };

    return (
      <section id={id} className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="slider-heading-row flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div className="slider-heading-copy min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-[11px] sm:text-xs font-semibold tracking-wide uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{badge}</span>
              </div>
              <h2 className="slider-section-heading text-[#101828]">{title}</h2>
              <p className="slider-section-description text-slate-600">{subtitle}</p>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
              <span className="sm:hidden text-xs font-semibold text-slate-400">Swipe horizontally →</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollRow('left')}
                  aria-label="Scroll left"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-200 bg-white text-[#101828] hover:bg-[#101828] hover:text-white active:scale-95 transition shadow-xs"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollRow('right')}
                  aria-label="Scroll right"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-200 bg-white text-[#101828] hover:bg-[#101828] hover:text-white active:scale-95 transition shadow-xs"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={rowRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {items.map((product) => (
              <div key={product.id} className="w-[260px] sm:w-[295px] snap-start flex-shrink-0">
                <ProductCard
                  product={product}
                  isSaved={enquiryList.some((i) => i.id === product.id)}
                  onToggleSave={() => toggleEnquiryItem(product)}
                  onViewDetails={() => setSelectedProduct(product)}
                  onWhatsApp={() =>
                    openWhatsAppEnquiry(
                      `Hello Verma Electronics (Lalru), I would like to enquire about:\n• Product: ${product.name}\n• Category: ${product.category}\n• Demo Reference Price: ₹${product.price.toLocaleString('en-IN')}\nPlease share current store availability and today's best price.`
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const getStorePageFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'services' || hash === 'products') return hash;
    return 'home';
  };

  const [storePage, setStorePage] = useState(getStorePageFromHash);

  const navigateStorePage = (page) => {
    setViewMode('store');
    setMobileMenuOpen(false);
    setStorePage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      setStorePage(getStorePageFromHash());
      setMobileMenuOpen(false);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-[#182230] selection:bg-[#00C2FF]/20 selection:text-[#101828]" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>
      {/* Google Fonts Injection & Mobile Scrollbar Utilities */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        html { scroll-behavior: smooth; overflow-x: hidden; }
        body { overflow-x: hidden; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: floatSlow 5s ease-in-out infinite; }
      `}</style>

      {/* Toast Notification Banner */}
      {toast && (
        <div className="fixed bottom-20 sm:bottom-24 left-4 right-4 sm:left-auto sm:right-6 z-50 sm:max-w-sm bg-[#101828]/95 backdrop-blur-md text-white px-4 py-3.5 rounded-2xl shadow-2xl border border-white/15 flex items-center gap-3">
          <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${toast.type === 'error' ? 'bg-rose-400' : 'bg-[#00C2FF]'}`} />
          <p className="text-xs sm:text-sm font-medium leading-snug">{toast.message}</p>
        </div>
      )}

      {/* =====================================================================
          1. STICKY GLASSMORPHIC NAVIGATION HEADER
         ===================================================================== */}
      <header className="sticky top-0 z-40 bg-white/92 backdrop-blur-xl border-b border-slate-200/80 transition-all">
        {/* Top Micro Info Strip (Compact Single-Line on Mobile) */}
        <div className="hidden sm:block bg-[#101828] text-white text-[10px] sm:text-xs py-1 sm:py-1.5 px-3 sm:px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 min-w-0 text-slate-200">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00C2FF] flex-shrink-0" />
              <span className="truncate">Lalru, Punjab</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300 flex-shrink-0">
              <Clock className="w-3.5 h-3.5 text-[#00C2FF]" />
              {storeSettings.openingHours}
            </span>
            <button
              onClick={() => setViewMode(viewMode === 'store' ? 'admin' : 'store')}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 hover:bg-[#2563EB] text-white font-semibold transition active:scale-95 flex-shrink-0"
            >
              <LayoutDashboard className="w-3 h-3 text-[#00C2FF]" />
              <span className="hidden sm:inline">{viewMode === 'store' ? 'Admin' : 'Storefront'}</span>
            </button>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-14 sm:h-auto sm:py-2.5 flex items-center justify-between gap-1.5 sm:gap-4">
          {/* Brand Logo */}
          <button
            onClick={() => {
              setViewMode('store');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-none min-w-0 flex-1"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#101828] via-[#1E3A8A] to-[#2563EB] flex items-center justify-center shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform flex-shrink-0">
              <svg viewBox="0 0 36 36" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none">
                <path d="M7 9L18 28L29 9" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 9L18 18L23 9" stroke="#00C2FF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18" cy="6" r="2" fill="#00C2FF" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="block whitespace-nowrap text-[12px] sm:text-xl font-extrabold tracking-tight text-[#101828] leading-tight">
                VERMA <span className="text-[#2563EB]">ELECTRONICS</span>
              </span>
              <span className="hidden sm:block text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-wider uppercase mt-0.5 truncate">
                Lalru • Mobiles, Repair & Appliances
              </span>
              <span className="block sm:hidden text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                Lalru Store
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          {viewMode === 'store' && (
            <nav className="hidden xl:flex items-center gap-1">
              {[
                { label: 'Home', action: () => navigateStorePage('home') },
                { label: 'Repair Services', action: () => navigateStorePage('services') },
                { label: 'Products & Accessories', action: () => navigateStorePage('products') },
                { label: 'Contact', action: () => navigateStorePage('home'), section: 'contact-section' },
              ].map((navItem) => (
                <button
                  key={navItem.label}
                  onClick={() => {
                    navItem.action();
                    if (navItem.section) setTimeout(() => scrollToSection(navItem.section), 100);
                  }}
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-[#182230] hover:text-[#2563EB] hover:bg-[#F3F6FA] transition"
                >
                  {navItem.label}
                </button>
              ))}
            </nav>
          )}

          {/* Header Right Actions (Min 44x44px touch targets) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            {viewMode === 'store' && (
              <>
                <button
                  onClick={() => setSearchModalOpen(true)}
                  aria-label="Search products"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#F3F6FA] hover:bg-slate-200/80 text-[#101828] active:scale-95 transition"
                >
                  <Search className="w-5 h-5" />
                </button>

                <button
                  onClick={() =>
                    openWhatsAppEnquiry(
                      'Hello Verma Electronics (Main Sardarpura, Lalru), I have an enquiry regarding a mobile/electronics product.'
                    )
                  }
                  className="hidden md:inline-flex items-center gap-2 h-11 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>

                <button
                  onClick={() => setEnquiryDrawerOpen(true)}
                  aria-label="Enquiry Shortlist"
                  className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-[#F3F6FA] hover:bg-slate-200/80 text-[#101828] active:scale-95 transition"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {enquiryList.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#2563EB] text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                      {enquiryList.length}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle Menu"
                  className="xl:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-[#101828] text-white hover:bg-[#2563EB] active:scale-95 transition"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Sticky Quick-Jump Category Pill Bar for Effortless Mobile & Tablet Browsing */}
        {viewMode === 'store' && (
          <div className="border-t border-slate-100 bg-[#F8FAFC]/95">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {[
                { label: 'All Catalog', action: () => scrollToSection('catalog-section', 'All') },
                { label: 'Smartphones', action: () => scrollToSection('catalog-section', 'Latest Smartphones') },
                { label: 'Refurbished', action: () => scrollToSection('catalog-section', 'Second-Hand & Refurbished Mobiles') },
                { label: 'Mobile Repair', action: () => scrollToSection('repair-section') },
                { label: 'Accessories', action: () => scrollToSection('catalog-section', 'Mobile Accessories') },
                { label: 'Smartwatches', action: () => scrollToSection('catalog-section', 'Smartwatches') },
                { label: 'Earbuds & Audio', action: () => scrollToSection('catalog-section', 'Bluetooth Speakers & Earbuds') },
                { label: 'LED TVs', action: () => scrollToSection('catalog-section', 'LED TVs') },
                { label: 'Refrigerators', action: () => scrollToSection('catalog-section', 'Refrigerators') },
                { label: 'Washing Machines', action: () => scrollToSection('catalog-section', 'Washing Machines') },
                { label: 'Special Offers', action: () => scrollToSection('offers-section') },
              ].map((pill) => (
                <button
                  key={pill.label}
                  onClick={pill.action}
                  className="px-3 py-1.5 rounded-full bg-white hover:bg-[#101828] text-[#182230] hover:text-white border border-slate-200/90 text-xs font-semibold whitespace-nowrap transition flex-shrink-0"
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Animated Mobile Drawer Navigation */}
        {mobileMenuOpen && viewMode === 'store' && (
          <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                { label: 'Home', action: () => scrollToSection('hero-section') },
                { label: 'Mobiles', action: () => scrollToSection('catalog-section', 'Latest Smartphones') },
                { label: 'Mobile Repair', action: () => scrollToSection('repair-section') },
                { label: 'Accessories', action: () => scrollToSection('catalog-section', 'Mobile Accessories') },
                { label: 'Home Appliances', action: () => scrollToSection('appliances-section') },
                { label: 'All Electronics', action: () => scrollToSection('catalog-section', 'All') },
                { label: 'About Us', action: () => scrollToSection('about-section') },
                { label: 'Contact & Map', action: () => scrollToSection('contact-section') },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="text-left px-3.5 py-3 min-h-[44px] rounded-xl bg-[#F3F6FA] hover:bg-[#2563EB] hover:text-white text-sm font-semibold text-[#101828] transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsAppEnquiry('Hello Verma Electronics, I need a mobile repair estimate.');
                }}
                className="flex-1 flex items-center justify-center gap-2 min-h-[46px] py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setViewMode('admin');
                }}
                className="flex-1 flex items-center justify-center gap-2 min-h-[46px] py-3 rounded-xl bg-[#101828] text-white font-semibold text-sm"
              >
                <LayoutDashboard className="w-4 h-4 text-[#00C2FF]" />
                Owner Admin Dashboard
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================================
          CONDITIONAL VIEW: OWNER ADMIN DASHBOARD VS CUSTOMER STOREFRONT
         ===================================================================== */}
      {viewMode === 'admin' ? (
        <AdminDashboard
          products={products}
          setProducts={setProducts}
          offers={offers}
          setOffers={setOffers}
          repairBookings={repairBookings}
          setRepairBookings={setRepairBookings}
          enquiries={enquiries}
          setEnquiries={setEnquiries}
          reviews={reviews}
          setReviews={setReviews}
          storeSettings={storeSettings}
          setStoreSettings={setStoreSettings}
          showToast={showToast}
          onBackToStore={() => setViewMode('store')}
        />
      ) : storePage === 'services' ? (
        <main>
          <section className="bg-gradient-to-br from-[#101828] to-[#172554] text-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button onClick={() => navigateStorePage('home')} className="mb-8 text-sm font-semibold text-[#00C2FF] hover:text-white transition">
                ← Back to Homepage
              </button>
              <span className="inline-flex px-3 py-1 rounded-full bg-white/10 text-[#00C2FF] text-xs font-bold uppercase tracking-wider">In-House Repair Lab</span>
              <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight">All Repair Services</h1>
              <p className="text-slate-300 mt-3 max-w-2xl text-base sm:text-lg leading-relaxed">
                Professional diagnostics and reliable repairs for all major mobile phone brands.
              </p>
            </div>
          </section>
          <section className="py-12 md:py-16 bg-[#F3F6FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {REPAIR_SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition">
                    <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-5"><Icon className="w-6 h-6" /></div>
                    <h2 className="text-lg font-extrabold text-[#101828]">{service.title}</h2>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">{service.desc}</p>
                    <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-bold text-[#2563EB]">{service.turnaround}</div>
                  </article>
                );
              })}
            </div>
          </section>
          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div><h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828]">Need a repair estimate?</h2><p className="text-slate-600 mt-2">Contact our Lalru repair desk for diagnostics and availability.</p></div>
              <div className="flex flex-col sm:flex-row gap-3">
                {storeSettings.phoneNumber && <a href={`tel:${storeSettings.phoneNumber}`} className="min-h-[48px] px-5 rounded-xl bg-[#101828] text-white font-bold text-sm flex items-center justify-center gap-2"><Phone className="w-4 h-4" />Call Now</a>}
                <button onClick={() => openWhatsAppEnquiry('Hello Verma Electronics, I need a mobile repair estimate.')} className="min-h-[48px] px-5 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2"><MessageCircle className="w-4 h-4" />WhatsApp</button>
              </div>
            </div>
          </section>
        </main>
      ) : storePage === 'products' ? (
        <main>
          <section className="bg-gradient-to-br from-[#101828] to-[#172554] text-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button onClick={() => navigateStorePage('home')} className="mb-8 text-sm font-semibold text-[#00C2FF] hover:text-white transition">← Back to Homepage</button>
              <span className="inline-flex px-3 py-1 rounded-full bg-white/10 text-[#00C2FF] text-xs font-bold uppercase tracking-wider">Complete Collection</span>
              <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight">Products & Accessories</h1>
              <p className="text-slate-300 mt-3 max-w-2xl text-base sm:text-lg leading-relaxed">Explore smartphones, chargers, cables, covers, glass, audio, power banks and everyday electronics.</p>
            </div>
          </section>
          <section className="py-10 md:py-14 bg-[#F3F6FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
              {['Mobile Accessories','Smartwatches','Bluetooth Speakers & Earbuds','Latest Smartphones','Second-Hand & Refurbished Mobiles','LED TVs','Refrigerators','Washing Machines','Kitchen Appliances','Other Electronics'].map((category) => {
                const categoryItems = products.filter((product) => product.category === category);
                if (!categoryItems.length) return null;
                return (
                  <div key={category}>
                    <div className="flex items-end justify-between mb-5"><h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828]">{category}</h2><span className="text-xs font-bold text-slate-500">{categoryItems.length} items</span></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                      {categoryItems.map((product) => <ProductCard key={product.id} product={product} isSaved={enquiryList.some((item) => item.id === product.id)} onToggleSave={() => toggleEnquiryItem(product)} onViewDetails={() => setSelectedProduct(product)} onWhatsApp={() => openWhatsAppEnquiry(`Hello Verma Electronics, I am interested in ${product.name}. Please share availability and today's price.`)} />)}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      ) : (
        <main>
          {/* 1. Hero */}
          <section id="hero-section" className="relative overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#101828] to-[#172554] text-white">
            <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-[#2563EB]/25 blur-3xl" />
            <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-[#00C2FF]/15 blur-3xl" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#00C2FF] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" /> Trusted Local Repair Experts
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-5 tracking-tight leading-[1.08]">
                  Mobile Repair, Accessories & Electronics
                </h1>
                <p className="text-slate-300 mt-5 max-w-2xl text-base sm:text-lg leading-relaxed">
                  Honest diagnostics, reliable repairs and quality accessories from a trusted electronics shop in Lalru.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-7">
                  <button onClick={() => navigateStorePage('services')} className="min-h-[50px] px-6 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-950/30 transition">
                    Explore Services <ArrowUpRight className="w-5 h-5" />
                  </button>
                  <button onClick={() => scrollToSection('contact-section')} className="min-h-[50px] px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition">
                    <Phone className="w-5 h-5 text-[#00C2FF]" /> Contact Us
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                  <SafeImage src={IMAGES.repairBench} alt="Professional electronics repair bench" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#101828]/85 backdrop-blur border border-white/15 p-4 flex items-center justify-between gap-3">
                    <div><p className="font-bold text-sm">Verma Electronics</p><p className="text-xs text-[#00C2FF] mt-0.5">Main Sardarpura, Lalru</p></div>
                    <Wrench className="w-7 h-7 text-[#00C2FF]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Repair services */}
          <section className="py-14 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Expert Assistance</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] mt-2">Our Repair Services</h2>
                  <p className="text-slate-600 mt-2">Popular repairs handled with care and transparent guidance.</p>
                </div>
                <button onClick={() => navigateStorePage('services')} className="self-start sm:self-auto min-h-[44px] px-5 rounded-xl border border-slate-200 bg-white text-[#2563EB] font-bold text-sm hover:bg-[#101828] hover:text-white transition inline-flex items-center gap-2">
                  View All Services <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {REPAIR_SERVICES.slice(0, 4).map((service) => {
                  const Icon = service.icon;
                  return (
                    <article key={service.title} className="group rounded-3xl border border-slate-200/80 bg-[#F8FAFC] p-5 sm:p-6 hover:bg-white hover:border-[#2563EB]/30 hover:shadow-lg transition">
                      <div className="w-12 h-12 rounded-2xl bg-[#101828] text-[#00C2FF] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform"><Icon className="w-6 h-6" /></div>
                      <h3 className="text-lg font-extrabold text-[#101828]">{service.title}</h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">{service.desc}</p>
                      <p className="mt-4 text-xs font-bold text-[#2563EB]">{service.turnaround}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 3. Featured products */}
          <section className="py-14 md:py-20 bg-[#F3F6FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div><span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Shop Essentials</span><h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] mt-2">Products & Accessories</h2><p className="text-slate-600 mt-2">Everyday tech essentials selected for quality and convenience.</p></div>
                <button onClick={() => navigateStorePage('products')} className="self-start sm:self-auto min-h-[44px] px-5 rounded-xl bg-[#101828] text-white font-bold text-sm hover:bg-[#2563EB] transition inline-flex items-center gap-2">Explore All Products <ArrowUpRight className="w-4 h-4" /></button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {products.filter((product) => ['Mobile Accessories','Smartwatches','Bluetooth Speakers & Earbuds'].includes(product.category)).slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} isSaved={enquiryList.some((item) => item.id === product.id)} onToggleSave={() => toggleEnquiryItem(product)} onViewDetails={() => setSelectedProduct(product)} onWhatsApp={() => openWhatsAppEnquiry(`Hello Verma Electronics, I am interested in ${product.name}. Please share availability and today's price.`)} />
                ))}
              </div>
            </div>
          </section>

          {/* 4. Why choose us */}
          <section className="py-14 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-8"><span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">Why Choose Us</span><h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] mt-2">Local service you can trust</h2></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {TRUST_PILLARS.slice(0, 4).map((pillar) => { const Icon = pillar.icon; return <article key={pillar.title} className="rounded-3xl bg-[#F8FAFC] border border-slate-200/80 p-5 sm:p-6"><div className="w-11 h-11 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-4"><Icon className="w-5 h-5" /></div><h3 className="font-extrabold text-[#101828]">{pillar.title}</h3><p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{pillar.desc}</p></article>; })}
              </div>
            </div>
          </section>

          {/* 5. Contact CTA */}
          <section id="contact-section" className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl bg-gradient-to-br from-[#101828] to-[#172554] text-white px-6 py-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-7">
                <div className="max-w-2xl"><span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF]">Visit or Contact</span><h2 className="text-2xl sm:text-4xl font-extrabold mt-2">Need a repair or looking for accessories?</h2><p className="text-slate-300 mt-2 text-sm sm:text-base">Speak with our team in Main Sardarpura, Lalru for availability and an honest estimate.</p></div>
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  {storeSettings.phoneNumber && <a href={`tel:${storeSettings.phoneNumber}`} className="min-h-[50px] px-6 rounded-xl bg-white text-[#101828] font-bold text-sm flex items-center justify-center gap-2"><Phone className="w-5 h-5" />Call Now</a>}
                  <button onClick={() => openWhatsAppEnquiry('Hello Verma Electronics (Main Sardarpura, Lalru), I would like to enquire about a repair or accessory.')} className="min-h-[50px] px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" />WhatsApp</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}