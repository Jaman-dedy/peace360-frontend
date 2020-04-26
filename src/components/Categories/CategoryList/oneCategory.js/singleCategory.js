import React, { Component } from 'react';
import Layout from '../../../Menu/Toolbar/Toolbar';
import { connect } from 'react-redux';
import './singleCategory.scss';
import Modal from '../../../UI/Modal/Modal';
import TextareaAutosize from 'react-textarea-autosize';
import Spinner from '../../../UI/Spinner/Spinner';
import {
  getOneCategory,
  updateCategory
} from '../../../../store/actions/categories';
import { fetchCurrentUser } from '../../../../store/actions/getCurrentUser';
class SingleCategory extends Component {
  state = {
    loading: true,
    modal: 'removeModal',
    title: '',
    category_Title: '',
    desc: '',
    date: '',
    new_title: '',
    new_desc: '',
    errordisp: 'errorDisplay',
    err: 'errorexis',
    backerr: 'backerrorexist'
  };
  onBack = () => {
    window.location.href = `/categories`;
  };
  onChangeInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  onUpdateCategory = () => {
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
  onSubmitCategory = () => {
    const {
      state: { desc, category_Title, title },
      props: { updateOneCategory }
    } = this;

    const categoryChange = {
      title_: title,
      body: { categoryTitle: category_Title, description: desc }
    };
    updateOneCategory(categoryChange, cb => {
      if (cb.status === 200) {
        window.location.href = `/singleCategory/${cb.data.categoryTitle}`;
      }
    });
    this.setState({
      modal: 'removeModal'
    });
  };

  onCloseError = () => {
    this.setState({
      errordisp: 'closeError',
      err: 'errorNotExist',
      backerr: 'backerrornotexist'
    });
  };
  componentWillMount = () => {
    const {
      match: {
        params: { category_Title }
      }
    } = this.props;
    this.setState({ title: category_Title });
  };
  componentDidMount = () => {
    const { getCategory } = this.props;
    const { title } = this.state;

    getCategory(title, data => {
      const newDate = new Date(data.data.date);
      this.setState({
        date: newDate.toISOString().substring(0, 10),
        desc: data.data.description,
        category_Title: data.data.categoryTitle
      });
    });
  };
  render() {
    const { category_Title, desc, date } = this.state;
    const {
      categ: { categoryTitle, description, loading, error }
    } = this.props;

    return (
      <div>
        <div className='singleCategory'>
          <div className='menu'>
            <Layout></Layout>
          </div>
          {loading ? (
            <div className='loading'>
              <Spinner></Spinner>
            </div>
          ) : (
            <div>
              <div className={this.state.modal}>
                <div onClick={this.onRemoveModal}>
                  <Modal>
                    <span className='close' onClick={this.onRemoveModal}>
                      &times;
                    </span>

                    <div className='title main-color'>Update Category</div>
                    <div className='form'>
                      <div className='row'>
                        <div className=''>
                          <fieldset>
                            <legend>Name</legend>
                            <input
                              type='text'
                              placeholder='Category name'
                              name='category_Title'
                              value={category_Title}
                              onChange={this.onChangeInput}
                            />
                          </fieldset>
                        </div>
                      </div>
                      <div className='row'>
                        <fieldset>
                          <legend>Description</legend>
                          <TextareaAutosize
                            style={{ width: '100%' }}
                            name='desc'
                            id='textarea'
                            placeholder='Description'
                            value={desc}
                            onChange={this.onChangeInput}
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
              {error ? (
                <div>
                  <div className={this.state.errordisp}>
                    {error}
                    <span onClick={this.onCloseError} className='closeSpan'>
                      {' '}
                      &times;
                    </span>
                  </div>
                </div>
              ) : null}

              <div
                className={
                  error
                    ? `back ${this.state.backerr}`
                    : 'back backerrornotexist'
                }
              >
                <i className='fas fa-chevron-left' onClick={this.onBack}></i>
              </div>
              <div
                className={
                  error
                    ? `category-container ${this.state.err}`
                    : 'category-container errorNotExist'
                }
              >
                <div className='editCategory' onClick={this.onUpdateCategory}>
                  <i className='fas fa-pen'></i>
                </div>
                <div className='category_title'>
                  {categoryTitle}
                  <span> created at : {date}</span>
                </div>
                <div className='description'>{description}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchCurrent_user: () => dispatch(fetchCurrentUser()),
  updateOneCategory: (categoryChange, cb) =>
    dispatch(updateCategory(categoryChange, cb)),
  getCategory: (title, cb) => dispatch(getOneCategory(title, cb))
});

const mapStateToProps = state => {
  return {
    categoriesLoading: state.categories.loading,
    newUser: state.currentUser.user,
    authError: state.currentUser.error,
    logged_in: state.login,
    categ: state.categories.category
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategory);
