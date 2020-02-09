import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Toolbar from '../../Menu/Toolbar/Toolbar';
import TextareaAutoSize from 'react-textarea-autosize';
import textConfig from '../../../helpers/textConfig.json';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Article.scss';

class NewArticle extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };
  onEditorStateChange = editorState => {
    this.setState({ editorState });
  };
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <div className='createArticle'>
          <div className='menu'>
            <Toolbar />
          </div>
          <div className='container'>
            <NavLink to='/SingleArticle'>
              <div className='back box'>
                <i class='fas fa-chevron-left font-color'></i>
              </div>
            </NavLink>
            <form>
              <div className='tab box'>
                <div className='titleField'>
                  <TextareaAutoSize
                    className='textareaClass'
                    placeholder='Type title'
                  />
                </div>
                <div className='uploadImage'>
                  <div className='chooseImage left font-color'>
                    Choose cover Image
                  </div>
                  <input
                    type='file'
                    name='coverUrl'
                    value={this.coverUrl}
                    onChange={this.fileSelectedHandler}
                    className='inputClass'
                  />
                </div>

                <div className='editor font-color'>
                  <Editor
                    toolbar={textConfig}
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    placeholder='Body of the article...'
                  />
                </div>

                <div className='btn'>
                  <button type='submit'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewArticle;
