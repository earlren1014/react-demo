/**
 * Created by renqi on 2/9/2017.
 */
import React from 'react';

var FirstStep = React.createClass({
    handleBlur:function () {
        this.refs.username
    },
    render:function () {
        return(
            <div id="step-one" className={this.props.status}>
                <h2>第一步</h2>
                <div>
                    <h3>用户名</h3>
                    <input type="text" ref="username" className="input-group" onBlur={this.handleBlur}/>
                    <h3>密码</h3>
                    <input type="text" className="input-group"/>
                    <h3>确认密码</h3>
                    <input type="text" className="input-group"/>
                </div>
            </div>
        )
    }
});

var SecondStep = React.createClass({
    render:function () {
        return(
            <div id="step-two" className={this.props.status}>
                <h2>第二步</h2>
                <div>
                    <h3>姓名</h3>
                    <input type="text" className="input-group"/>
                    <h3>邮箱</h3>
                    <input type="text" className="input-group"/>
                    <h3>地址</h3>
                    <input type="text" className="input-group"/>
                </div>
            </div>
        )
    }
});

var ThirdStep = React.createClass({
    render:function () {
        return(
            <div id="step-three" className={this.props.status}>
                <h2>第三步</h2>
                <div>
                    <h3>条款</h3>
                    <textarea>毫无疑问调试是开发过程中相当相当痛苦的一件事情，如果没有好的工具配合那就更痛苦了！React是基于Babel的编译转码，到浏览器执行的实际上是es5代码，虽说良好的代码结构转码后可读性还是相当高，但对于我这种小白是接受不了了</textarea>
                    <h3>手机号</h3>
                    <input type="text" className="input-group"/>
                    <h3>验证码</h3>
                    <input type="text" className="input-group"/>
                </div>
            </div>
        )
    }
});

var StepBtn = React.createClass({
    getInitialState:function () {
        return {
            text:'下一步',
            stepShow:0,
            first:'show',
            second:'hidden',
            third:'hidden'
        }
    },

    handleClick:function (e) {
        var current = this.state.stepShow == 2 ? 2 : this.state.stepShow+1;
        this.setState({
            stepShow: current,
            first: current == 0 ? 'show':'hidden',
            second: current == 1 ? 'show':'hidden',
            third: current == 2 ? 'show':'hidden',
        });

    },
    goBackClick:function () {
        var current = this.state.stepShow == 0 ? 0 : this.state.stepShow-1;
        this.setState({
            stepShow: current,
            first: current == 0 ? 'show':'hidden',
            second: current == 1 ? 'show':'hidden',
            third: current == 2 ? 'show':'hidden',
        });
    },

    render:function () {
        var btnText = this.state.stepShow == 2 ? '接受' : '下一步';
        return(
            <div>
                <div id="go-back">
                    <button onClick={this.goBackClick}>返回</button>
                </div>
                <FirstStep status={this.state.first}></FirstStep>
                <SecondStep status={this.state.second}></SecondStep>
                <ThirdStep status={this.state.third}></ThirdStep>
                <div id="step-btn">
                    <input type="button" value={btnText} className="btn btn-lg" id="stepButton" onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
})

class App extends React.Component{
    render(){
        return (
            <StepBtn></StepBtn>

        )
    }
}

export default  App