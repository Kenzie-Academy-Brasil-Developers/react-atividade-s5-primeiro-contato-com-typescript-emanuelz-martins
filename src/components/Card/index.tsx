import { Hobby, Paper, Title } from './styles';

interface CardProps {
    name: string;
    hobby: string;
    age: number;
}

const Card = ({ name, age, hobby }: CardProps) => (
    <Paper>
        <Title>
            {name}, {age}
        </Title>
        <Hobby>{hobby}</Hobby>
    </Paper>
);
export default Card;
