'use client'

// Tools
import { useState, useEffect } from "react"
import { client } from '@/sanity/lib/client'
import { isMobile } from 'react-device-detect'
import { motion } from "framer-motion"

// Types
import { CustomersRefType } from "@/types/components/customer-ref-type"
import { CustomerType } from '@/types/documents/customer-type'

// Queries
import { getCustomers } from "@/sanity/queries/documents/customers-query"

// Components
import SanityImage from "@/components/sanity-image"

const CustomerRef: React.FC<CustomersRefType> = ({
  active,
  anchor,
  title,
  componentIndex,
}) => {
  const [customers, setCustomers] = useState<CustomerType[]>([])
  const [isMobileView, setIsMobileView] = useState<boolean>(false)

  useEffect(() => {
    setIsMobileView(isMobile)
  }, [])

  useEffect(() => {
    'running'
    const getCustomersData = async () => {
      const data = await client.fetch(getCustomers)
      setCustomers(data)
    }
    getCustomersData()
  }, [])




  if (active) {
    return (
      <section
        id={`${anchor ? anchor : 'customer-ref-' + componentIndex}`}
        className={`customer-ref w-full flex flex-col justify-center bg-gray-900 px-5`}
      >
        <div className='container py-16 lg:py-24 flex flex-col justify-center items-center text-center'>
          <motion.div 
            initial={{ 
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{ 
              opacity: 1,
              scale: 1
            }}
            viewport={{ once: true }} 
            transition={{ 
              type: 'spring',
              duration: 1.5
            }}  
          >
            <h2 className='text-3x 2xl:text-4xl'>{title}</h2>
          </motion.div>
          
          
          <div className='flex justify-center items-center gap-16 mt-16'>
            {customers.map((customer, index) => {

          

              if (customer.title === 'Front Burner Society') {
                return (
                  <motion.div 
                    key={index}
                    initial={{ 
                      opacity: 0,
                      scale: 0.95
                    }}
                    whileInView={{ 
                      opacity: 1,
                      scale: 1
                    }}
                    viewport={{ once: true }} 
                    transition={{ 
                      delay: !isMobileView ? 0+index*0.5 : 0,
                      type: 'spring',
                      duration: 1.5
                    }}  
                  >
                    <SanityImage
                      source={customer.image}
                      alt={customer.title}
                      width={customer.image.asset.metadata.dimensions.width}
									    height={customer.image.asset.metadata.dimensions.height}
                      className='object-cover object-center w-16 2xl:w-24 h-auto'
									    componentIndex={componentIndex}
                    />
                  </motion.div>
                )
              }

              return (
                <motion.div 
                  key={index}
                  initial={{ 
                    opacity: 0,
                    scale: 0.95
                  }}
                  whileInView={{ 
                    opacity: 1,
                    scale: 1
                  }}
                  viewport={{ once: true }} 
                  transition={{ 
                    delay: !isMobileView ? 0+index*0.5 : 0,
                    type: 'spring',
                    duration: 1.5
                  }}  
                >
                  <SanityImage
                    source={customer.image}
                    alt={customer.title}
                    width={customer.image.asset.metadata.dimensions.width}
                    height={customer.image.asset.metadata.dimensions.height}
                    className='object-cover object-center w-32 md:w-56 2xl:w-72 h-auto'
                    componentIndex={componentIndex}
                  />
                </motion.div>
              )
            })}
            </div>
        </div>
      </section>
    )
  }
}

export default CustomerRef