import { useEffect, useState } from "react";
import { Heading, Page, TextStyle, Layout, EmptyState } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';


const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])

  console.log(products)

  const handleSelection = (resources) => {
    const idsFromResources = resources.selection.map(product => product.id)
    setOpen(false)
    setProducts(idsFromResources)
  }

  const emptyState = false

  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: 'Select products',
          onAction: () => setOpen(true),
        }}
      />
      <Layout>
        Admin Side UI
      </Layout>
    </Page>
  )
}

export default Index;
