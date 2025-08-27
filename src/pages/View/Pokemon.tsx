import type {Pokemon} from "../../types/types";
import ReactImageGallery from 'react-image-gallery';
import type {ReactImageGalleryItem} from "react-image-gallery";
import styles from './Pokemon.module.scss';
import {TYPE_COLOR} from "../../constants/constants.ts";
import {useFetch} from "../../hooks/fetch.ts";
import {getPokemonData} from "../../hooks/api.ts";
import {Link, useParams} from "react-router";
import "react-image-gallery/styles/css/image-gallery.css";
import {classNames} from "../../utils/classNames.ts";
import {useCallback} from "react";


const PokemonView = () => {
  const {name} = useParams();
  const fetchPokemon = useCallback(() => getPokemonData(name ?? ''), [name]); //x

  const {loading, error, data} = useFetch<Pokemon>(fetchPokemon);

  if (!data) return <div>{error}</div>;

  return (
    <div className={styles.view}>
      <div className={classNames([styles.images, styles.component])}>
        <Link to={'/'} className={styles.backButton}>Voltar</Link>
        <ReactImageGallery
          additionalClass={styles.gallery}
          items={GalleryImage(data.images)}
          infinite
          showBullets
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
        />
      </div>

      <div className={classNames([styles.data, styles.component])}>
        <div className={styles.infos}>
          <div className={styles.field}>
            <span className={styles.fieldName}>Nome:</span>
            <h3 className={classNames([styles.name, styles.fieldValue])}>
              {data.name[0].toUpperCase() + data.name?.slice(1)}
            </h3>
          </div>

          <div className={styles.field}>
            <span className={styles.fieldName}>Tipos:</span>

            <div className={styles.types}>
              {data.types.map((type, index) =>
                  <span
                    className={classNames([styles.type, styles.fieldValue])}
                    style={{backgroundColor: TYPE_COLOR[type as keyof typeof TYPE_COLOR]}}
                    key={index}
                  >
                {type}
              </span>
              )}
            </div>
          </div>

          <div className={styles.field}>
            <span className={styles.fieldName}>Peso:</span>
            <span className={styles.fieldValue}>{data.weight}</span>
          </div>

          <div className={styles.field}>
            <span className={styles.fieldName}>Altura:</span>
            <span className={styles.fieldValue}>{data.height}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const GalleryImage = (images: string[]): ReactImageGalleryItem[] => {
  return images.map((image) => {
    return {
      original: image,
      originalAlt: 'Pokemon Photo',
      loading: "lazy",
    };
  });
}

export default PokemonView;

//TODO: colocar tagzinha para quando for a imagem do poke shiny