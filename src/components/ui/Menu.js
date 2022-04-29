import React from 'react'

export default function Menu({title, items}) {
  return (
     <section>
         <nav className="grid gap-4">
              <h6 className="text-lg text-purple-500">{title}</h6>
              <nav>
                  <ul className="grid gap-y-2">
                      {items.map((item, key) => (
                          <li key={key}>
                              <a href="#" className="text-sm hover:text-purple-600">
                                  {item.title}
                              </a>
                          </li>
                      ))}
                  </ul>
              </nav>
         </nav> 
                    
    </section>
        
  
  )
}
