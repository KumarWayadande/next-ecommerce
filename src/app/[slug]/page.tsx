"use client"
import { usePathname } from 'next/navigation'
    
    function SinglePage() {
        const pathName = usePathname();
      return (
        <div>
          {pathName}
        </div>
      )
    }
    
    export default SinglePage
    