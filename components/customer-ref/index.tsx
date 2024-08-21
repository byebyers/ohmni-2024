'use client'

// Tools
import { useState, useEffect } from "react"
import { client } from '@/sanity/lib/client'

// Types
import { CustomersRefType } from "@/types/components/customer-ref-type"
import { CustomerType } from '@/types/documents/customer-type'

// Queries
import { getCustomers } from "@/sanity/queries/documents/customers-query"

// Components

const CustomerRef: React.FC<CustomersRefType> = ({
  active,
  anchor,
  title,
  componentIndex,
}) => {
  const [customers, setCustomers] = useState<CustomerType[]>([])

  useEffect(() => {
    'running'
    const getCustomersData = async () => {
      const data = await client.fetch(getCustomers)
      setCustomers(data)
    }
    getCustomersData()
  }, [])

  console.log(customers)


  if (active) {
    return (
      <section
        id={`${anchor ? anchor : 'customer-ref-' + componentIndex}`}
        className={`customer-ref w-full flex flex-col items-center bg-gray-900 px-5`}
      >
        <div className='container py-16 lg:py-24 flex flex-col justify-center items-center text-center'>
          <h2>{title}</h2>
          <div className='flex flex-wrap justify-center items-center gap-16 mt-16'>
            {customers.map((customer, index) => {

              console.log(customer)

              if (customer.title === 'Front Burner Society') {
                return (
                  <div key={index} className='w-16'>
                    <img src={customer.image.asset.url} alt={customer.title} />
                  </div>
                )
              }

              return (
                <div key={index} className='w-3/4 md:w-56'>
                  <img src={customer.image.asset.url} alt={customer.title} className="w-full" />
                </div>
              )
            })}
            </div>
        </div>
      </section>
    )
  }
}

export default CustomerRef