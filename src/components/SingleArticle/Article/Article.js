import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Select from 'react-select';
import { stateToHTML } from 'draft-js-export-html';

import Toolbar from '../../Menu/Toolbar/Toolbar';
import TextareaAutoSize from 'react-textarea-autosize';
import textConfig from '../../../helpers/textConfig.json';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Article.scss';
import * as actions from '../../../store/actions/index';
import {initImageUpload, initDropEffect} from '../../../shared/utility'
import Spinner from '../../UI/Spinner/Spinner'
import './uploadImage.scss'


const options = [
  { value: 'peace', label: 'peace' },
  { value: 'Youth and peace', label: 'Youth and peace' },
  { value: 'Sustainability', label: 'Sustainability' },
  { value: 'modern societies', label: 'modern societies' }
];

const customStyles = {
  control: () => ({
    fontSize: 15
  }),
  dropdownIndicator: (provided, state) => {
    const opacity = 0;
    return { ...provided, opacity };
  },
  indicatorSeparator: (provided, state) => {
    const opacity = 0;
    return { ...provided, opacity };
  },
  clearIndicator: (provided, state) => {
    const opacity = 0;
    return { ...provided, opacity };
  },
  menuList: (provided, state) => {
    const width = '170px';
    const fontSize = '15px';
    return { ...provided, width, fontSize };
  },
  menu: (provided, state) => {
    const width = '170px';
    const fontSize = '15px';
    return { ...provided, width, fontSize };
  },
  container: (provided, state) => {
    const paddingTop = '10px';
    return { ...provided, paddingTop };
  }
};
class NewArticle extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    formIsValid: false,
    title: '',
    subtitle: '',
    redirect: '/createArticle',
    categoryId: null,
    hasPosted: false

  };

  
  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
  };
  inputTitleChangeHandler = (event) => {
    this.setState({ title: event.target.value });
  };
  inputSubTitleChangeHandler = (event) => {
    this.setState({ subtitle: event.target.value });
  };
  uploadImgInputHandler = (event) => {

    this.props.onUploadImg(event.target.files[0])
   
  }
  handleChange = selectedOption => {
  
    this.setState({ selectedOption });
  
  };
  componentDidMount(){
    this.setState({
      hasPosted: false
    })
  }
  selectedOptionHandler = (event) => {
    event.preventDefault();
  
    this.setState({ categoryId: event.target.value}) 


  }
 submitArticleHandler =  (event) => {
    event.preventDefault();
    let tags = []
  
    this.state.selectedOption.map(tag => {
     return tags.push(tag.value)
    })
  
    const { imgUrl } = this.props.uploadImg

    const body = stateToHTML(this.state.editorState.getCurrentContent());
    this.props.onPostArticle(
      this.state.title,
      this.state.subtitle,
      this.state.categoryId,
      imgUrl,
      body,
      tags
    );
    this.setState({ editorState: '', title: '', redirect: '' });
    this.setState({ hasPosted: true})
  };
  render() {
       // initialize box-scope
       var boxes = document.querySelectorAll('.boxImg');
       let redirect;
       let articleId;
       const { article } = this.props
       
       if(!article && this.state.hasPosted){
         redirect = (<Spinner/>)
         console.log('article :>> ');
       } else if(article){
         console.log('yeaaaaa :>> ');
           articleId = article._id
       return <Redirect
       to={{
        pathname: "/SingleArticle",
        search: '?id = articleId',
        hash: '#hash',
        state: { articleId },
      }}
       />
       }
      
          
       for (let i = 0; i < boxes.length; i++) {
         let box = boxes[i];
         initDropEffect(box);
         initImageUpload(box);
       }
    const { selectedOption } = this.state;
    const { editorState } = this.state;
    const { categories } = this.props.categories

    return (
      <div>
        {/* <Redirect to={this.state.redirect} /> */}
       
     
        <div className="createArticle">
          <div className="menu">
            <Toolbar />
          </div>
          <div className="container">
            <NavLink to="/SingleArticle">
              <div className="back box">
                <i className="fas fa-chevron-left font-color"></i>
              </div>
            </NavLink>
            <form
              onSubmit={(e) =>
                this.submitArticleHandler(
                  e,
                  this.state.title,
                  this.state.editorState
                )
              }
            >
              <div className="tab box">
                <div className="titleField">
                  <TextareaAutoSize
                    className="textareaClass"
                    placeholder=" Title"
                    value={this.state.title}
                    onChange={(e) => this.inputTitleChangeHandler(e)}
                  />
                </div>
                <div className="subTitleField">
                  <TextareaAutoSize
                    className="subTitle"
                    placeholder=" SubTitle"
                    value={this.state.Subtitle}
                    onChange={(e) => this.inputSubTitleChangeHandler(e)}
                  />
                </div>
                <div className="tags">
                  <label htmlFor="">Add a tag</label>
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    isMulti
                    isSearchable
                    styles={customStyles}
                  />
                </div>
                <div className="category">
                  <label> Select a category</label>
                  
                  <select onChange={this.selectedOptionHandler} value={this.state.categoryId} >
                  <option value="0" disabled selected="selected">Select a category</option>
                    {categories.map(category => (
                      <option value={category._id}  >{category.categoryTitle} </option>
                    ))}
                    
                  </select>
                </div>
              
                 <label className='chooseImage left font-color'>
                    Choose cover Image
                  </label>

                <div class="wrapperImg">
                  <div class="boxImg">
                    <div class="js--image-preview"></div>
                    <div class="upload-options">
                      <label>
                        <input value={this.state.image} type="file" class="image-upload" accept="image/*" onChange={this.uploadImgInputHandler} />
                      </label>
                    </div>
                  </div>

                </div>


                <div className="editor font-color">
                  <Editor
                    toolbar={textConfig}
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    placeholder="Body of the article..."
                  />
                </div>
                  {redirect}

                <div className="btn">
                  <button type="submit">Submit</button>
                </div>
              
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    categories: state.categories,
    uploadImg: state.uploadImg,
    article: state.postArticle.article
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPostArticle: (title, subtile, categoryId, coverPhoto, body, tags) =>
      dispatch(actions.postArticle(title, subtile, categoryId, coverPhoto, body, tags)),
      onUploadImg:(imgFile) => dispatch(actions.uploadImg(imgFile))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArticle);
