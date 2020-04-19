// React Dependencies
import React from 'react'
import {PrismCode} from "../components/prism-component"
import Navigation from '../components/navigation'
import Footer from '../components/footer'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Alert} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

import linearRegression from "../images/linear-regression.png"

const code1 = `
ID    x    y  sig_y  sig_x  rho_xy
 1  201  592     61      9   -0.84
 2  244  401     25      4    0.31
 3   47  583     38     11    0.64
 4  287  402     15      7   -0.27
 5  203  495     21      5   -0.33
 6   58  173     15      9    0.67
 7  210  479     27      4   -0.02
 8  202  504     14      4   -0.05
 9  198  510     30     11   -0.84
10  158  416     16      7   -0.69
11  165  393     14      5    0.30
12  201  442     25      5   -0.46
13  157  317     52      5   -0.03
14  131  311     16      6    0.50
15  166  400     34      6    0.73
16  160  337     31      5   -0.52
17  186  423     42      9    0.90
18  125  334     26      8    0.40
19  218  533     16      6   -0.78
20  146  344     22      5   -0.56
`

const code2 = `
def linear_regression(x, y, ey):
    '''
    Returns best-fit values and standard uncertainty variances for the
    function of the from y = mx + b.


    Parameters
    ----------
    x : array_like
        Independent variable, usually labeled as the x values.
    y : array_like
        Dependent variable, usually labeled as the y values.
    ey : array_like
        Gaussian uncertainties in the y direction.


    Returns
    -------
    dict() : Python dictionary. b is y-intercept, eb is error in y-intercept,
             m in slope, and em is error in slope.
    '''
    import numpy as np
    from numpy.linalg import inv

    A = np.matrix([np.ones_like(y), x]).T
    C = np.diag(pow(ey, 2))
    X1 = inv(A.T @ inv(C) @ A)
    X2 = A.T @ inv(C) @ y
    X =  X2 @ X1

    return {
        'b': X[0, 0],
        'eb': np.sqrt(X1[0, 0]),
        'm': X[0, 1],
        'em': np.sqrt(X1[1, 1])
        }
`

const code3 = `
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from linear import linear_regression

df = pd.read_csv('data.txt', sep='\\s+')
df = df[4:]
c = linear_regression(df['x'], df['y'], df['sig_y'])
x = np.array([0, 300])
y = c['m'] * x + c['b']

plt.errorbar(df['x'], df['y'], yerr=df['sig_y'], label='Data')
plt.plot(x, y, label='Model')
`

export default () => (
  <div>
    <Navigation/>

    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col lg="8">
          <h1 className="text-center mb-5">Fitting a Line to Data</h1>

          <Alert variant="info">
            This excercise is taken from Data Analysis Recipes: Fitting a Model to Data by David W. Hogg, Jo Bovy, and Dustin Lang. arXiv 1008.4686, astro-ph.IM, 27 Aug 2010.
          </Alert>
          <h2 className="mt-5">Excercise 1</h2>
          <p>Using the standard linear algebra method of this Section, fit a straight line values for data points 5 through 20 in Table 1 on page 6. That is, ignore the first four data points, and also ignore the columns for. Make a plot showing the points, their uncertainties, and the best-fit line. Your plot should end up looking like Figure 1. What is the standard uncertainty variance on the slope of the line?</p>

          <h3 className="mt-5">Table 1 on page 6</h3>
          <PrismCode code={code1} language="asciidoc"/>

          <h3 className="mt-5">Linear Regression Function</h3>
          <PrismCode code={code2} language="python"/>

          <h3 className="mt-5">Plotting the Data.</h3>
          <PrismCode code={code3} language="python"/>
          <Image src={linearRegression} fluid/>
        </Col>
      </Row>

    </Container>

    <Footer/>
  </div>
)
