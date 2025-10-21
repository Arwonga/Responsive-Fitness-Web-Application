import { Calendar, CheckCircle, TrendingUp, Users } from 'lucide-react';
import * as motion from 'motion/react-client';
export default function WhyChooseUs() {
    const features = [
        {
            icon: <CheckCircle />,
            title: 'Certified Professional Trainers',
            description: 'Our trainers are certified experts dedicated to helping you achieve your fitness goals safely and effectively.'
        },
        {
            icon: <TrendingUp />,
            title: 'Personalized Workout & Diet Plans',
            description: 'We create customized workout plans and meal planstailored to your individual needs and goals.'
        },
        {
            icon: <Calendar />,
            title: 'Flexible Schedules',
            description: 'We offer a variety of class times and personal training sessions to fit your busy lifestyle.'
        },
        {
            icon: <Users />,
            title: 'Community Support & Progress Tracking',
            description: 'Our community is here to support you, and we provide tools to track your progress and celebrate your achievements.'
        },
    ];
    return (
        <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 ">
                        <motion.h2 
                        initial={{ opacity: 0, y: 16 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground">
                            Why Choose <span className='text-primary '>FitPro</span> Fitness?
        
                        </motion.h2>
                        <motion.p 
                        initial={{ opacity: 0, y: 12 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto text-center">
                           We provide everything you need to succedd on your fitness journey with 
                           proven methods and expert support
                        </motion.p>
                    </div>

                    {/* Features Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
                                className="bg-card p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-4 ">
                                    {feature.icon}
                                    <h3 className="text-lg font-semibold ml-2">{feature.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
    );
}