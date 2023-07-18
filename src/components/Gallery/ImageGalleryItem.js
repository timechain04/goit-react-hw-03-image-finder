import React from 'react';
import PropTypes from 'prop-types';
import css from './Gallery.module.css';

export default function ImageGalleryItem({ smallImg, id, openModal }) {
  return (
    <li className={css.item} onClick={() => openModal(id)}>
      <img className={css.itemImage} src={smallImg} alt="" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};
