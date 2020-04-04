import React, { Component } from 'react';
import { connect } from 'react-redux';
import './categorylist.scss';
import Layout from '../../Menu/Toolbar/Toolbar';
import Modal from '../../UI/Modal/Modal';
import TextareaAutosize from 'react-textarea-autosize';
import Spinner from '../../UI/Spinner/Spinner';
import {
  fetchCategories,
  createCategory,
  deleteCategory,
  updateCategory,
  getOneCategory
} from '../../../store/actions/categories';
import { fetchCurrentUser } from '../../../store/actions/getCurrentUser';
class CreateCategory extends Component {
  state = {
    modal: 'removeModal',
    categoryTitle: '',
    description: '',
    errors: '',
    title: '',
    errorDisplay: 'errorDisplay'
  };

  onDisplayModal = () => {
    this.setState({
      modal: 'displayModal'
    });
  };

  onRemoveModal = e => {
    if (
      e.target.className === 'modal-content' ||
      e.target.className === 'close'
    ) {
      this.setState({
        modal: 'removeModal',
        update: false
      });
    }
  };
  onRemoveError = e => {
    if (
      e.target.className === 'modal-content' ||
      e.target.className === 'close_error'
    ) {
      this.setState({
        errorDisplay: 'noErrorDisplay'
      });
    }
  };

  onChangeCategoryTitle = e => {
    const { value } = e.target;
    this.setState({ categoryTitle: value });
  };

  onChangeCategoryDescription = e => {
    this.setState({ description: e.target.value });
  };

  onSubmitCategory = () => {
    const {
      state: { description, categoryTitle },
      props: { createNewCategory }
    } = this;

    createNewCategory({ description, categoryTitle }).then(() => {
      this.setState({ modal: 'removeModal', update: false });
    });
  };

  onDelete = categoryTitle => {
    this.props.deleteOneCategory(categoryTitle);
  };

  onGetCategory = categTitle => {
    window.location.href = `/singleCategory/${categTitle}`;
    this.props.getCategory(categTitle);
  };

  componentDidMount() {
    const { fetchCurrent_user } = this.props;
    if (localStorage.token === undefined) {
      window.location.replace('/');
    }
    fetchCurrent_user();
    this.props.getCategories();
  }

  render() {
    const { categories, loading } = this.props;
    const { categoryTitle, description } = this.state;
    return (
      <div>
        <div className='categories'>
          <div className='menu'>
            <Layout></Layout>
          </div>
          <div className='category_card'>
            <div className={this.state.modal}>
              <div onClick={this.onRemoveModal}>
                <Modal>
                  <span className='close' onClick={this.onRemoveModal}>
                    &times;
                  </span>

                  <div className='title main-color'>New category</div>
                  <div className='form'>
                    <div className='row'>
                      <div className=''>
                        <fieldset>
                          <legend>Name</legend>
                          <input
                            type='text'
                            placeholder='Category name'
                            name='categoryTitle'
                            value={categoryTitle}
                            onChange={this.onChangeCategoryTitle}
                          />
                        </fieldset>
                      </div>
                    </div>{' '}
                    <div className='row textareaAutosize'>
                      <fieldset>
                        <legend>Description</legend>
                        <TextareaAutosize
                          placeholder=' Category description'
                          name='description'
                          id='textarea'
                          style={{ width: '100%' }}
                          value={description}
                          onChange={this.onChangeCategoryDescription}
                        />
                      </fieldset>
                    </div>
                    <div className='btn'>
                      <button onClick={this.onSubmitCategory}>Save</button>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
            {loading ? (
              <div>
                <Spinner />
              </div>
            ) : (
              <div>
                <div className='title font-color'>
                  Categories list{' '}
                  <span
                    className='createCategory right '
                    onClick={this.onDisplayModal}
                  >
                    <i className='fas fa-plus'></i>
                  </span>
                </div>
                <div>
                  {categories.length === 0 ? (
                    <div>No categories</div>
                  ) : (
                    <div className='list '>
                      <div className='list_title font-color'>
                        <div className='list_row id'>No</div>
                        <div className='list_row name'>Category name</div>
                        <div className='list_row desc'>Description</div>
                      </div>

                      {categories.map((object, key) => (
                        <div key={key} className='font-color'>
                          <div>
                            <div className='list_row id' id={object.id}>
                              {key + 1}
                            </div>
                            <div className='list_row name' id={object.id}>
                              {object.categoryTitle}
                            </div>
                            <div className='list_row desc'>
                              {object.description
                                ? object.description
                                : 'no description of this category'}
                              <span className='menu_list'>
                                <i
                                  className='fas fa-trash'
                                  onClick={() =>
                                    this.onDelete(object.categoryTitle)
                                  }
                                ></i>
                                <i
                                  className='far fa-eye'
                                  onClick={() =>
                                    this.onGetCategory(object.categoryTitle)
                                  }
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories()),
  createNewCategory: body => dispatch(createCategory(body)),
  deleteOneCategory: categTitle => dispatch(deleteCategory(categTitle)),
  fetchCurrent_user: () => dispatch(fetchCurrentUser()),
  updateOneCategory: (title, body) => dispatch(updateCategory(title, body)),
  getCategory: title => dispatch(getOneCategory(title))
});

const mapStateToProps = state => {
  return {
    newUser: state.currentUser.user,
    error: state.categories.error,
    loading: state.categories.loading,
    categories: state.categories.categories,
    category: state.categories.category,
    authError: state.currentUser.error,
    logged_in: state.login,
    categ: state.categories.category
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategory);
