/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Tag, HStack } from "@chakra-ui/react"
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/blogsprojects.module.css'

const BlogCard = ({ blog }) => {

    return (
        <div style={{ whiteSpace: 'initial' }}>
            <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden"> 
                {/* bg={currentTheme.secondary} */}
                {blog.thumbnail && <Image src={blog.thumbnail} alt='asach kahitari' height='300' width='500' /> }
                <Box p="6">
                    <HStack>
                        {
                            blog.categories.slice(0, 3).map((category:any, key:any) => {
                                return (
                                    <div key={key}>
                                        <Tag.Root size="sm" borderRadius="md" variant="outline" colorPalette="purple">
                                            <Tag.Label>{category}</Tag.Label>
                                        </Tag.Root>
                                    </div>
                                )
                            })
                        }
                    </HStack>
                    <Box
                        mt="1"
                        as="h4"
                        lineHeight="tight"
                    >
                        {blog.title}
                    </Box>
                    <Box as="span" fontSize="sm">
                    {/* color={currentTheme.subtext} */}
                        {blog.description.replace(/(<([^>]+)>)/ig, '').slice(0, 85) + ' . . .'}
                    </Box>
                    <div style={{marginTop: '1rem'}}>
                        <Box>
                            <Link href={blog.link} className={styles.cta2} style={{ color: '#3182ce' }}>View More</Link>
                        </Box>
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default BlogCard