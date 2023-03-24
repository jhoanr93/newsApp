import { FormControl, InputLabel, Select, MenuItem, Button, Box} from '@mui/material'
import useNews from '../hooks/useNews'

const CATEGORIES = [
    { label: 'Business', value: 'business' },
    { label: 'Entertainment', value: 'entertainment' },
    { label: 'General', value: 'general' },
    { label: 'Health', value: 'health' },
    { label: 'Science', value: 'science' },
    { label: 'Sports', value: 'sports' },
    { label: 'Technology', value: 'technology' }
]


const Form = () => {
    const { category, handleChangeCategory } = useNews();
  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select label="Category"
            onChange={handleChangeCategory}
            value={category}>
                {CATEGORIES.map((category) => (
                    <MenuItem key={category.value} value={category.value}>
                        {category.label}
                    </MenuItem>
                ))}
            </Select>
            <Box marginY={2}>
            <Button fullWidth variant="contained" color="primary" size="large" type="submit">Search</Button>
            </Box>
        </FormControl>
    </form>

  )
}

export default Form