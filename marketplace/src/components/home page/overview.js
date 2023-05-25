import "./overview.css";

function Overview() {
    return (
        <div class="overview-box">
            <div class="buyComponent">
                <p>Buy</p>
                <ul class="dash-list">
                    <li>USDC</li>
                    <li>Bitcoin</li>
                    <li>Ethereum</li>
                </ul>
            </div>

            <div class="first-arrow">
                <p>&rarr;</p>
            </div>

            <div class="procComponent">
                <p>Process</p>
                <ul class="dash-list">
                    <li>Create an NFT of the property</li>
                    <li>Store on the blockchain</li>
                </ul>
            </div>

            <div class="second-arrow">
                <p>&rarr;</p>
            </div>

            <div class="ownComponent">
                <p>Own</p>
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
