import { plans } from '@/lib/constants'
import * as motion from 'motion/react-client'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Badge, Check } from 'lucide-react'
export default function Pricing () {
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
                        Affordable <span className='text-primary'>Plans</span> for Everyone
                    </motion.h2>
                    <motion.p 
                    initial={{ opacity: 0, y: 12 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto text-center">
                        Choose the perfect plan that fits your budget and fitness goals.All plans include our core benefits
                    </motion.p>
                </div>
                {/* Pricing Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {plans.map((plan, index) => (
                        <motion.div
                        initial={{ opacity: 0, y: 24 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 + index * 0.2 }}
                        key={plan.name} className='relative'>
                            <Card className= {`h-full  ${plan.popular ? 'border-2 border-primary shadow-lg ring-1 ring-primary/20 hover:shadow-2xl transition-shadow duration-300' : 'hover:shadow-2xl transition-shadow duration-300'}`}>
                                <CardHeader className='text-center p-8 pb-0'  >
                                    <h3 className='text-2xl font-bold font-heading text-foreground mb-2 '>{plan.name}</h3>
                                    <p className='text-muted-foreground mb-4'>{plan.description}</p>
                                    <div>
                                        <span className='text-bold text-5xl font-black font-heading text-foreground'>${plan.price}</span>
                                        <span className='text-muted-foreground ml-1'>/{plan.period}</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className='space-y-4 mb-8'>
                                        {plan.features.map((feature) => (
                                            <li key={feature} className='flex items-center'>
                                                <Check className=' w-5 h-5 mr-3 text-green-400' />
                                                <span className='text-muted-foreground'>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className={`w-full py-3 text-lg font-semibold transition-colors duration-300  ${plan.popular ? ' bg-primary text-primary-foreground hover:bg-primary/90 ' : 'bg-secondary text-primary-foreground mt-15 hover:bg-primary'}`}>
                                        {plan.cta}
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div className='text-center mx-auto mt-20 text-xl text-muted-foreground max-w-2xl'>
                    <p>All plans include a 7-day free trial.No commitment required</p>
                </motion.div>
            </div>
        </section>
  )
}