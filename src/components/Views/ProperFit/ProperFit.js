import React from 'react';
import {connect} from 'react-redux';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const ProperFit = (props) => (
    <div>
        <title>Sister Sizes</title>
        <h1><span class="s1"><b>How do I find my Sister Size?</b></span></h1>
        <p class="p2"><span class="s1">First, find your bra size on the chart.</span></p>
        <p class="p3"><span class="s1"></span><br/></p>
        <p class="p2"><span class="s1">The bra size directly above your bra size is your sister size with a smaller band and bigger cup.</span>
        </p>
        <p class="p3"><span class="s1"></span><br/></p>
        <p class="p2"><span class="s1">The bra size directly below your bra size is your sister size with a bigger band and smaller cup.</span>
        </p>
        <p class="p3"><span class="s1"></span><br/></p>
        <p class="p2"><span class="s1">For example, if you normally wear a 34D in bras, your sister bra sizes are 32DD and 36C.</span>
        </p>
        <p class="p3"><span class="s1"></span><br/></p>
        <p class="p2"><span class="s1"></span></p>
        <p class="p3"><span class="s1"></span><br/></p>
        <h1 >
            <span class="s1"><b>When should I use sister sizing?</b></span></h1>
        <p class="p2"><span class="s1">In most cases, you will use sister sizing when the cups fit well, but the band size of your regular bra size feels too big or too loose. Since the majority of a bra’s support comes from the band – and not the straps and cups like we often like to think, you want a snug and supportive band that stays in place for the best fit. Using your sister sizes can sometimes help to ensure you have a proper fitting band.</span>
        </p>
        <p class="p3"><span class="s1"></span><br/></p>
        <p class="p2"><span class="s1">Because not every lingerie brand or style fits the same, you might use your sister size when looking for a particular style. Every brand uses its own measuring systems, and even within the same brand, you may find particular styles run smaller or larger. For example, a balconette bra may run small in the cups, while a full cup bra - which generally has more coverage, may run larger in the cups. You might even be surprised to find that some styles fit better in your sister size then your normal bra size.</span>
        </p>
        <p class="p3"><span class="s1"></span><br/></p>
        <p class="p2"><span class="s1">While sister sizing does open a window of opportunity for more sizes and choices, keep in mind not every bra or style may be compatible with your sister size or body type and that's perfectly normal!</span>
        </p>
        <p class="p3"><span class="s1"></span><br/></p>
        <p class="p3"><span class="s1"></span><br/></p>
        <p class="p3"><span class="s1"></span><br/></p>
        <p class="p4"><span class="s2"><a
            href="https://www.hourglasslingerie.net/blogs/hourglass-blog/sister-sizing-lingeries-best-kept-secret"><b>[Source]</b></a></span><span
            class="s3"><span class="Apple-converted-space"> </span></span></p>
    </div>

);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProperFit);