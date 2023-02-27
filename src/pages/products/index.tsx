import { useFetch } from "@/useFetch"

import { useEffect, useState } from "react"

  export default function Products () {
    const {data} = useFetch("  http://localhost:3000/recipes")
    console.log(data)
    return (
      <p>data</p>
    )
     
  }