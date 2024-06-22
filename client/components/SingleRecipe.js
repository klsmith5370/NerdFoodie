import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { Container, Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button, Collapse, IconButton } from '@material-ui/core'
import { fetchSingleRecipe } from '../store/recipe'
import { FaArrowLeft } from 'react-icons/fa'
import { styled } from '@material-ui/core'

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }))

export const SingleRecipe = () => {
    const recipe = useSelector(state => state.recipe)
    const { characterName, recipeName, recipeIngredients, recipeDescription, recipeInstructions, characterImage} = recipe
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchSingleRecipe(id))
    }, [dispatch])

    // const [expanded, setExpanded] = useState(false);

    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // }


    return (
        <Container>
            <div 
                className='single-recipe' 
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    marginTop: '50px', 
                    borderRadius: '50px',
                    
                }}
            >

                <img 
                    src={characterImage}
                    alt='character image'
                    style={{ 
                        height: 'auto', 
                        width: '50%', 
                        objectFit: 'contain',
                        borderRadius: '10px',
                        marginTop: '100px', 
                    }}
                />
                
                <br/>

                
                    <Card 
                        style={{ 
                            backgroundColor: '#FFC6FF',
                            width: '50%',
                            marginLeft: '20px',
                            marginTop: '100px',
                        }}
                    >
                        <CardContent>

                            <Typography gutterBottom variant='h2'>
                                {characterName}
                            </Typography>

                            <Typography gutterBottom variant='h4'>
                                {recipeName}
                            </Typography>

                            <h3>Description:</h3>

                            <Typography variant='body2'>
                                {recipeDescription}
                            </Typography>

                            <br />

                            <h3>Ingredients:</h3>
                            <Typography variant='body2'>
                                {recipeIngredients}
                            </Typography>

                            <br />

                            <h3>Instructions:</h3>

                            <Typography variant='body2'>
                                {recipeInstructions}
                            </Typography>

                            <br />

                            <Link to={'/characterRecipes'}>
                                <Button color='primary' variant='contained'><FaArrowLeft style={{ marginRight: '10px' }}/> Back to all recipes</Button>
                            </Link>

                        </CardContent>
                    </Card>   
                            
                
                        {/* <CardActions>
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                                <FaArrowRight /> 
                            </ExpandMore>
                        </CardActions>

                        <Collapse in={expanded} timeout='auto' unmountOnExit>
                            <CardContent>
                                Add to Favorite
                            </CardContent>
                        </Collapse> */}          
            </div>
        </Container>
    )

}

export default SingleRecipe