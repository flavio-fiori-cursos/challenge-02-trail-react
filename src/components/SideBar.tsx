import { Button } from './Button';

interface SideBarProps {
    genres: Array<{
        id: number;
        name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
        title: string;
    }>;
    selectedGenreId: number;
    onHandleClickButton: () => void;
}

export function SideBar({ genres, selectedGenreId, onHandleClickButton }: SideBarProps) {
    return(

        <nav className="sidebar">

            <span>Watch<p>Me</p></span>

            <div className="buttons-container">
                {
                    genres.map(genre => (

                        <Button
                            key={ genre.title }
                            id={ String(genre.id) }
                            title={ genre.title }
                            iconName={ genre.name }
                            onClick={ () => onHandleClickButton(genre.id) }
                            selected={ selectedGenreId === genre.id }
                        />
                    ))}
            </div>

        </nav>

    )
}