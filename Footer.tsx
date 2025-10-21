import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
            <footer className="bg-secondary text-neutral-300 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Column 1 */}
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-3xl font-black font-heading text-primary mb-4">FitPro Fitness</h3>
                            <p className="mb-6 leading-relaxed max-w-md">Transform your life with our comprehensive fitness programs,
                                experts trainers, and supportive community.
                            </p>
                            <div className="flex space-x-4">
                                <Link href="#" className=" w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center text-primary hover:bg-white/80 transition-colors duration-300">
                                <Facebook className="w-5 h-5 "/>
                                </Link>
                            
                                <Link href="#" className=" w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center text-primary hover:bg-white/80 transition-colors duration-300">
                                <Instagram className="w-5 h-5 "/>
                                </Link>
                                 <Link href="#" className=" w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center text-primary hover:bg-white/80 transition-colors duration-300">
                                <Twitter className="w-5 h-5 "/>
                                </Link>
                                <Link href="#" className=" w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center text-primary hover:bg-white/80 transition-colors duration-300">
                                <Youtube className="w-5 h-5 "/>
                                </Link>
                            </div>
                        </div>
                        {/* Column 2 */}
                        <div>
                            <h4 className="text-lg font-bold mb-4 text-primary font-heading">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-neutral-300 hover:text-primary transition-colors duration-300">Home</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-300 hover:text-primary transition-colors duration-300">About</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-300 hover:text-primary transition-colors duration-300">Services</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-300 hover:text-primary transition-colors duration-300">Pricing</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-neutral-300 hover:text-primary transition-colors duration-300">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div>
                            <h4 className="text-lg font-bold mb-4 text-primary font-heading">Contact Info</h4>
                            <h5 className=" font-bold  ">Phone</h5>
                            <p className="mb-2">+254 746 566 724</p>
                            <h5 className="font-bold">Email</h5>
                            <p className="mb-2">arwongaa@gmail.com</p>
                            <h5 className="font-bold ">Location</h5>
                            <p>123 Fitness St, </p>
                            <p>Wellness City, TX 75001</p>
                        </div>
                    </div>

                    <div>
                        <p className="pt-15 text-center text-neutral-400">
                            ©2025 FitPro Fitness. All rights reserved. Transform your body, transform your life.
                        </p>
                    </div>
                </div>
            </footer>
    );
}