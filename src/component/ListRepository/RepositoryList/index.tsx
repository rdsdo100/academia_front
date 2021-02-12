import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../../store/ducks/repositories/types';
import { ApplicationState } from '../../../store';

import * as RepositoriesActions from  '../../../store/ducks/repositories/actions';

import RepositoryItem from '../RepositoryItem';
import {AuthState} from "../../../store/ducks/auth/types";


interface StateProps {
  ok : {repositories: Repository[] ,
    auth?: string}
}

interface DispatchProps {
  loadRequest(): void


}

type Props = StateProps & DispatchProps

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }



  render() {
    const { ok } = this.props;

    return (
        <div>
          <ul>
            {ok.repositories.map(repository => (
                <RepositoryItem key={repository.id} repository={repository} />
            ))}
          </ul>
          <div>
            {ok.auth}
          </div>
        </div>
    );
  }
}

interface Tipos {
  applicationState : ApplicationState,
  authState : AuthState
}

const mapStateToProps = (state: ApplicationState) => (
    {
      ok : {
        auth: state.auth.auth,
        repositories: state.repositories.data
      }
    }
);

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);


export default connect(mapStateToProps , mapDispatchToProps )(RepositoryList);
