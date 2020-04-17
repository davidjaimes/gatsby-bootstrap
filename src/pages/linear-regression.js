// React Dependencies
import React from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

// Bootstrap Dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Table} from 'react-bootstrap'


export default () => (
  <div>
    <Navigation/>

    <Container className="mt-5">
      <h1 className="text-center mb-5">Fitting a Line to Data</h1>
      <p><b>Foreword:</b> This excercise is taken from David Hogg's paper (From Hogg et al. 2010)</p>

      <h2>Excercise 1</h2>
      <p>Using the standard linear algebra method of this Section, fit a straight line values for data points 5 through 20 in Table 1 on page 6. That is, ignore the first four data points, and also ignore the columns for. Make a plot showing the points, their uncertainties, and the best-fit line. Your plot should end up looking like Figure 1. What is the standard uncertainty variance on the slope of the line?</p>
      <p>Table 1 on page 6:</p>
      <div class="gatsby-highlight">
      <pre>
      ID x y sig_y sig_x rho_xy
1 201 592 61 9 -0.84
2 244 401 25 4 0.31
3 47 583 38 11 0.64
4 287 402 15 7 -0.27
5 203 495 21 5 -0.33
6 58 173 15 9 0.67
7 210 479 27 4 -0.02
8 202 504 14 4 -0.05
9 198 510 30 11 -0.84
10 158 416 16 7 -0.69
11 165 393 14 5 0.30
12 201 442 25 5 -0.46
13 157 317 52 5 -0.03
14 131 311 16 6 0.50
15 166 400 34 6 0.73
16 160 337 31 5 -0.52
17 186 423 42 9 0.90
18 125 334 26 8 0.40
19 218 533 16 6 -0.78
20 146 344 22 5 -0.56
      </pre>
      </div>
      <Table striped bordered hover size="sm" className="text-right">
        <thead>
          <tr>
            <th>ID</th>
            <th>x</th>
            <th>y</th>
            <th>sig_y</th>
            <th>sig_x</th>
            <th>rho_xy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>201</td>
            <td>592</td>
            <td>61</td>
            <td>9</td>
            <td>-0.84</td>
          </tr>
          <tr>
            <td>2</td>
            <td>244</td>
            <td>401</td>
            <td>25</td>
            <td>4</td>
            <td>0.31</td>
          </tr>
          <tr>
            <td>3</td>
            <td>47</td>
            <td>583</td>
            <td>38</td>
            <td>11</td>
            <td>0.64</td>
          </tr>
          <tr>
            <td>4</td>
            <td>287</td>
            <td>402</td>
            <td>15</td>
            <td>7</td>
            <td>-0.27</td>
          </tr>
          <tr>
            <td>5</td>
            <td>203</td>
            <td>495</td>
            <td>21</td>
            <td>5</td>
            <td>-0.33</td>
          </tr>
          <tr>
            <td>6</td>
            <td>58</td>
            <td>173</td>
            <td>15</td>
            <td>9</td>
            <td>0.67</td>
          </tr>
          <tr>
            <td>7</td>
            <td>210</td>
            <td>479</td>
            <td>27</td>
            <td>4</td>
            <td>-0.02</td>
          </tr>
          <tr>
            <td>8</td>
            <td>202</td>
            <td>504</td>
            <td>14</td>
            <td>4</td>
            <td>-0.05</td>
          </tr>
          <tr>
            <td>9</td>
            <td>198</td>
            <td>510</td>
            <td>30</td>
            <td>11</td>
            <td>-0.84</td>
          </tr>
          <tr>
            <td>10</td>
            <td>158</td>
            <td>416</td>
            <td>16</td>
            <td>7</td>
            <td>-0.69</td>
          </tr>
          <tr>
            <td>11</td>
            <td>165</td>
            <td>393</td>
            <td>14</td>
            <td>5</td>
            <td>0.30</td>
          </tr>
          <tr>
            <td>12</td>
            <td>201</td>
            <td>442</td>
            <td>25</td>
            <td>5</td>
            <td>-0.46</td>
          </tr>
          <tr>
            <td>13</td>
            <td>157</td>
            <td>317</td>
            <td>52</td>
            <td>5</td>
            <td>-0.03</td>
          </tr>
          <tr>
            <td>14</td>
            <td>131</td>
            <td>311</td>
            <td>16</td>
            <td>6</td>
            <td>0.50</td>
          </tr>
          <tr>
            <td>15</td>
            <td>166</td>
            <td>400</td>
            <td>34</td>
            <td>6</td>
            <td>0.73</td>
          </tr>
          <tr>
            <td>16</td>
            <td>160</td>
            <td>337</td>
            <td>31</td>
            <td>5</td>
            <td>-0.52</td>
          </tr>
          <tr>
            <td>17</td>
            <td>186</td>
            <td>423</td>
            <td>42</td>
            <td>9</td>
            <td>0.90</td>
          </tr>
          <tr>
            <td>18</td>
            <td>125</td>
            <td>334</td>
            <td>26</td>
            <td>8</td>
            <td>0.40</td>
          </tr>
          <tr>
            <td>19</td>
            <td>218</td>
            <td>533</td>
            <td>16</td>
            <td>6</td>
            <td>-0.78</td>
          </tr>
          <tr>
            <td>20</td>
            <td>146</td>
            <td>344</td>
            <td>22</td>
            <td>5</td>
            <td>-0.56</td>
          </tr>
        </tbody>
      </Table>
    </Container>

    <Footer/>
  </div>
)
