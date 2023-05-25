import "./overview.css";

function Overview() {
    return (
        <div>
            <h2>overview page</h2>
            {/* buy component of overview component */}
            <div class="buyComponent">
                <p>Buy</p>
                <ul class="dash-list">
                    <li>USDC</li>
                    <li>Bitcoin</li>
                    <li>Ethereum</li>
                </ul>
            </div>

            {/* arrow between components */}
            <div class="arrow">
                <p>&rarr;</p>
            </div>

            {/* process component of overview component */}
            <div class="procComponent">
                <p>Process</p>
                <ul class="dash-list">
                    <li>Create an NFT of the property</li>
                    <li>Store on the blockchain</li>
                </ul>
            </div>

            {/* arrow between components */}
            <div class="arrow">
                <p>&rarr;</p>
            </div>

            {/* ownership component of overview component */}
            <div class="ownComponent">
                <p>ownership</p>
                <ol class="custom-list">
                    <li>John Smith</li>
                    <li>Address</li>
                    <li>Property Info</li>
                </ol>
            </div>
        </div>
    );
}

export default Overview;
