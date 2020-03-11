import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { stateToHTML } from 'draft-js-export-html';

import Toolbar from '../../Menu/Toolbar/Toolbar';
import TextareaAutoSize from 'react-textarea-autosize';
import textConfig from '../../../helpers/textConfig.json';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Article.scss';
import * as actions from '../../../store/actions/index';

class NewArticle extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    formIsValid: false,
    title: '',
    subtitle: '',
    redirect: '/createArticle',
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
  submitArticleHandler = (event) => {
    event.preventDefault();
    const body = stateToHTML(this.state.editorState.getCurrentContent());
    this.props.onPostArticle(this.state.title, this.state.subtitle, body);
    this.setState({ editorState: '', title: '', redirect: '' });
  };
  render() {
    const { editorState } = this.state;

    return (
      <div>
        <Redirect to={this.state.redirect} />
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

                <div className="editor font-color">
                  <Editor
                    toolbar={textConfig}
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    placeholder="Body of the article..."
                  />
                </div>

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

const mapDispatchToProps = (dispatch) => {
  return {
    onPostArticle: (title, body) => dispatch(actions.postArticle(title, body)),
  };
};

export default connect(null, mapDispatchToProps)(NewArticle);
