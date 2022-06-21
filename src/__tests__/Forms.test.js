import React from "react";
import {create} from 'react-test-renderer'
import { TextForm } from '../components/common/Forms';

describe('Input Component', ()=>{
  test('Matches the snapshot', ()=>{
    const input = create(<TextForm/>);
    expect(input.toJSON()).toMatchSnapshot();
  })
})