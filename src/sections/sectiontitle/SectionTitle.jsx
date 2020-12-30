import React, { Component } from 'react'
import styled from  'styled-components'

export default class SectionTitle extends Component {
    render() {
        const SectionDiV = styled.div`
            margin-bottom: 50px;
            text-align: center;
        `
        const SectionH6 = styled.h6`
            font-size: 20px;
            color: #2d3dd0;
        `
        const SectionH1 = styled.h6`
            font-size: 50px;
        `
        return (
            <>
                <SectionDiV className="entry-section-title">
                    <SectionH6>FEATURES</SectionH6>
                    <SectionH1>Awesome, Clean, Poweful and Creative!</SectionH1>
                </SectionDiV>
            </>
        )
    }
}
